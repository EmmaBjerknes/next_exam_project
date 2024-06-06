"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search() {
  const router = useRouter();

  const [inputValue, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  const handleSearch = () => {
    if (inputValue) {
      setValue("");
      return router.push(`/search/?q=${inputValue}`);
    }
  };

  const handleKeyPress = (event: { key: any }) => {
    if (event.key === "Enter") return handleSearch();
  };

  return (
    <div className="relative flex sm:w-1/3 w-4/5 max-h-10">
      <input
        name="search"
        className="block w-full rounded-full border border-gray-200 py-[9px] pl-10 outline-2 placeholder:text-gray-500"
        placeholder={"Vad letar du efter idag?"}
        value={inputValue ?? ""}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <FaMagnifyingGlass className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
    </div>
  );
}
