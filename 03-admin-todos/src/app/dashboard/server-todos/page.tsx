export const dynamic = 'auto'
export const revalidate = 0

import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";


export const metadata = {
 title: 'Listado de todos',
 description: 'Todos en server',
};


export default async function ServerTodosPage() {

  const todos = await prisma.todo.findMany({
    orderBy: {description: 'asc'}
  })

  return (
    <>
      <span className="text-3xl mb-10">Server actions</span>
      <div className="w-full px-3 mx-3 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos}/>
    </>
  );
}