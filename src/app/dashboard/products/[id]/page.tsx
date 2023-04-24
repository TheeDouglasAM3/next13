// versão canary do next
// export async function generateMetadata({ params }) {
//   return {
//     title: `Produto ${params.id}`,
//   }
// }

interface ProductProps {
  params: {
    id: string
  }
}

export default function Product({ params }: ProductProps) {
  return <h1>Product: {params.id}</h1>
}
