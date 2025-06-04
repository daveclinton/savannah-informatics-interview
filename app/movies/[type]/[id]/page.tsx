import React from "react";
import DetailsClient from "../../Media-Details-Client";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ type: string; id: string }>;
}) {
  const { type, id } = await params;
  return <DetailsClient type={type} id={id} />;
}
