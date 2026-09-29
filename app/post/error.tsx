"use client";

import ErrorMessage from "@/app/components/ErrorMessage";
import { useEffect } from "react";

type RootErrorPageProps = {
  error: Error,
  reset?: () => void;
}

export default function RootErrorPage({ error }: RootErrorPageProps) {
  useEffect(() => {
    console.log(error)
  }, [error]);

  return (
    <ErrorMessage
      pageTitle="Interal Server Error"
      contentTitle="501"
      content="Ocorreu um erro inesperado. Tente novamente mais tarde."
    />
  );
}
