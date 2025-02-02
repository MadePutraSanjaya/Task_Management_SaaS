"use client"
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
    const navigation = useRouter()
  
    navigation.push("/home")
  
    return <main></main>
  }
  
