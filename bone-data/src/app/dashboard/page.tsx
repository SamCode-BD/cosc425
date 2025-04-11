import { Bone, columns } from "./bone-table/columns"
import { DataTable } from "./bone-table/data-table"

async function getData(): Promise<Bone[]> {
  // Fetch data from your API here.
  return [
    {
      id: "75",
      name: "femur",
      museum: "SUB",
      user: "Sam",
      menuID: "Actions"
    },
    {
        id: "76",
        name: "clavicle",
        museum: "SUB",
        user: "Aaron",
        menuID: "Actions"
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
