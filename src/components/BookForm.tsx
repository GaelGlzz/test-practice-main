type BookFormProps = {
  addBookAction: (formData: FormData) => void,
  isPending: boolean,
  inputBookNameRef: React.RefObject<HTMLInputElement | null>
}

export function BookForm({ addBookAction, isPending, inputBookNameRef }: BookFormProps) {
  return (
    <form
      className="book-form"
      action={addBookAction}
    >
      <div className="book-form__intro">
        <h2>New book</h2>
        <p>Complete the fields to add a book to the reading list.</p>
      </div>

      <div className="book-form__fields">
        <div className="field">
          <label htmlFor="book-title">Title</label>
          <input
            id="book-title"
            name="title"
            type="text"
            placeholder="Project Hail Mary"
            ref={inputBookNameRef}
          />
        </div>

        <div className="field">
          <label htmlFor="book-author">Author</label>
          <input
            id="book-author"
            name="author"
            type="text"
            placeholder="Andy Weir"
            defaultValue=""
          />
        </div>

        <div className="field">
          <label htmlFor="book-pages">Pages</label>
          <input
            id="book-pages"
            name="pages"
            type="number"
            min="1"
            step="1"
            placeholder="496"
          />
        </div>
      </div>

      <button className="button" type="submit" disabled={isPending}>
        {isPending ? "Adding..." : "Add book"}
      </button>
    </form>
  )
}
