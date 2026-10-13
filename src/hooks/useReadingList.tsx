import {useActionState, useRef, useState} from "react";
import type { BookItem } from "../types/BookItem";

const initialState: BookItem[] = [
    { id: "1", title: "Project Hail Mary", author: "Andy Weir", pages: 496 },
    { id: "2", title: "Circe", author: "Madeline Miller", pages: 393 },
    { id: "3", title: "The Midnight Library", author: "Matt Haig", pages: 304 }
]

export const useReadingList = () => {
    const [booksState, setBooks] = useState(initialState)
    const inputBookNameRef = useRef<HTMLInputElement | null>(null)
    const bookAction = async (prevState: BookItem[], formData: FormData): Promise<BookItem[]> => {
        await new Promise((resolve) => setTimeout(resolve, 3000))
        inputBookNameRef.current?.focus()
        const newBook = {
            id: crypto.randomUUID(),
            title: formData.get("title") as string,
            author: formData.get("author") as string,
            pages: Number(formData.get("pages"))
        }
        setBooks((currentBooks) => [...currentBooks, newBook])
        return [...prevState, newBook]
    }
    const [, addBookAction, isLoadedAction] = useActionState(bookAction, initialState)
    return {
        booksState,
        addBookAction,
        isLoadedAction,
        inputBookNameRef
    }
}
