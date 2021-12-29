function TodoList({form, children}){
    return(
        <main className='todo-list-template'>
            <section className='form-wrapper'>
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    )
}