'use client'

import React, { useState } from 'react'
import Image from "next/image";
import { Reorder, useDragControls, motion } from 'framer-motion'
import { ICountry } from '../interfaces/list'

export default function Countries({ countries }: any) {
    const [items, setItems] = useState(countries)
    const [draggedId, setDraggedId] = useState<string | null>(null)
    const controls = useDragControls();
    return (
        <div className=" p-4 min-h-screen flex items-center justify-center">
            <Reorder.Group onReorder={setItems} values={items} axis={"y"} className='flex flex-col w-fit     px-8 py-4 border--500 border-2 rounded-lg shadow-lg'>
                {items.map((country: any, index: number) => (
                    <motion.div
                        key={country.id} className=''>
                        {draggedId === country.id ? (
                            <motion.div
                                key={country.id} className={` py-4 -mx-8 opacity-50 bg-[#F4F5F6]
] `}>
                                    <div className='flex items-center gap-6 mx-8'>
                                        <Image className='opacity-[30%]' src={country.src} width={60} height={60} alt={country.name} quality={100} />
                                        <div>
                                            <p>{country.name}</p>
                                            <p >
                                                <div className='text-xs flex gap-1 items-center'>
                                                    <Image src='/images/svg.svg' width={15} height={15} alt={country.name} />
                                                    {country.place}
                                                </div>
                                            </p>
                                        </div>
                                    </div>
                            </motion.div>
                        ) : null}
                        <Reorder.Item value={country} id={country.id}
                            // drag='x'
                            onDragStart={() => {
                                setDraggedId(country.id)
                            }}
                            onDragEnd={() => {
                                setDraggedId(null)
                            }}
                            whileDrag={{
                                scale: 0.5,
                            }}
                            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                            dragElastic={0.5}
                            dragTransition={{ bounceDamping: 20, bounceStiffness: 600 }}
                            dragControls={controls}
                            // dragListener={false} 
                            className="cursor-pointer relative"
                        >
                            <motion.div
                                className={` flex items-center gap-6 py-4 ${draggedId === country.id && 'absolute border p-5 w-[28rem] rounded-[12px] shadow-[0px_8px_16px_0px_rgba(6,31,48,0.08)]'} `} onPointerDown={(e) => controls.start(e)}>
                                <Image src={country.src} width={60} height={60} alt={country.name} quality={100} />
                                <div>
                                    <p className={`${draggedId === country.id && 'text-[1.8rem]'} text-[1rem]`}>{country.name}</p>
                                    <p >
                                        <motion.div className='text-xs flex gap-1 items-center' style={{ display: draggedId === country.id ? 'none' : 'flex' }}>
                                            <Image src='/images/svg.svg' width={15} height={15} alt={country.name} />
                                            {country.place}
                                        </motion.div>
                                    </p>
                                </div>
                            </motion.div>
                        </Reorder.Item>
                    </motion.div>
                ))}

            </Reorder.Group>
        </div>
    );
}
