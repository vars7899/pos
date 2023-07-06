import { IconCheck, IconDotsVertical, IconX } from "@tabler/icons-react";
import React from "react";

export const Table = () => {
  return (
    <div className="">
      <div>
        <div>{/* <input type="text" /> */}</div>
        <div>
          <button></button>
          <button></button>
        </div>
      </div>
      <div className="">
        <table className="w-[100%] font-beVietnam dark:text-neutral-200 border-solid border-[1px] rounded-xl  dark:border-neutral-900">
          <thead className="bg-neutral-950">
            <tr className="text-sm">
              <th scope="col" className="px-2 py-4"></th>
              <th scope="col" className="px-1 py-4 text-start">
                Product
              </th>
              <th scope="col" className="px-4 py-4 text-start">
                Price
              </th>
              <th scope="col" className="px-4 py-4 text-start">
                Calories
              </th>
              <th scope="col" className="px-4 py-4 text-start">
                Category
              </th>
              <th scope="col" className="px-4 py-4 text-start">
                Total Sold
              </th>
              <th scope="col" className="px-4 py-4 text-center">
                Available
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <div className="flex items-center justify-center cursor-pointer">
                  <IconDotsVertical size={20} />
                </div>
              </td>
              <td className="whitespace-nowrap px-1 py-4">
                <div>
                  <p className="font-medium">Diet Pepsi</p>
                  <p className="text-xs uppercase text-neutral-600 mt-1"># 49j3094gj0394jg0349jg</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">3.49</td>
              <td className="whitespace-nowrap px-4 py-4">0 cal</td>

              <td className="whitespace-nowrap px-4 py-4">
                <div className="dark:bg-neutral-900 dark:text-neutral-500 text-sm capitalize px-6 py-3 rounded-full flex items-center justify-center w-min">
                  Beverage
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">5</td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className={`flex items-center justify-center ${true ? "text-green-600" : "text-red-600"}`}>
                  {true ? <IconCheck /> : <IconX />}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
