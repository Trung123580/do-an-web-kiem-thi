import { dataVolunteer } from "@/utils/contanst";
import Image from "next/image";
import Link from "next/link";
import UI from "./UI";
type Params = Promise<{ 'slug-volunteer': string[] }>

export default async function VolunteerDetailPage({ params }: { params: Params }) {
  const slug = (await params)["slug-volunteer"][0]
  return (
    <UI slug={slug}/>
  )
}
