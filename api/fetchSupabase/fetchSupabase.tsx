"use client";
import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";

const fetchUsers =  async () => {
    const { data } = await supabase.from('users').select("*");
    return data;
}

export {fetchUsers};
