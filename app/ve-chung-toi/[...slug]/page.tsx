import React from "react"
import Audience from "./Audience"

const page = ({
  params,
}: {
  params: {
    slug: string
  }
}) => {
  const [slug] = params.slug
console.log(slug);
    
  return <Audience />
}

export default page
