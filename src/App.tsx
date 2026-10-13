import { AppHeader } from "./components/AppHeader"
import { BookForm } from "./components/BookForm"
import { ReadingList } from "./components/ReadingList"
import { useReadingList } from "./hooks/useReadingList"

function App() {
  const { booksState, addBookAction, isLoadedAction, inputBookNameRef } = useReadingList()

  return (
    <main className="app">
      <AppHeader />
      <BookForm
        addBookAction={addBookAction}
        isPending={isLoadedAction}
        inputBookNameRef={inputBookNameRef}
      />
      <ReadingList books={booksState} />
    </main>
  )
}

export default App
