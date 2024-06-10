'use client'

import React, { useState } from 'react'
import Image from "next/image";
import { Reorder, useDragControls, motion } from 'framer-motion'
import { ICountry } from '../interfaces/list'

export default function Countries({ countries }: any) {
    const [items, setItems] = useState(countries)
    const [draggedId, setDraggedId] = useState<string | null>(null)
    const controls = useDragControls();
    const itemHeight = 80;

    return (
        <div className="containe relative mx-aut p-4">
            <Reorder.Group onReorder={setItems} values={items} axis={"y"}>
                {items.map((country: any, index: number) => (
                    <motion.div
                        // style={{ position: 'absolute', top: `${index * itemHeight}px`, width: '100%' }}
                        key={country.id} className=''>
                        {draggedId === country.id ? (
                            <div key={country.id} className={`flex items-center gap-6 py-4 -mx-4 opacity-50 bg-slate-200 `}>
                                <Image src={country.src} width={60} height={60} alt={country.name} quality={100} />
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
                        ) : null}
                        <Reorder.Item value={country} id={country.id}
                            // drag='x'
                            onDragStart={() => {
                                setDraggedId(country.id)
                                // controls.start(event, { snapToCursor: true })
                            }}
                            onDragEnd={() => {
                                setDraggedId(null)
                            }}
                            whileDrag={{
                                scale: 0.5,
                                // zIndex: 2,
                                // x: draggedId === country.id ? -100 : 100,
                                // border: '1px solid rgba(0, 0, 0, 0.1)',
                                // borderRadius: '12px', boxShadow: '0px 8px 16px 0px rgba(6, 31, 48, 0.08)',
                                // paddingLeft: '24px',
                                // paddingRight: '24px'

                            }}
                            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                            dragElastic={0.5}
                            dragTransition={{ bounceDamping: 20, bounceStiffness: 600 }}
                            dragControls={controls}
                            // dragListener={false} 
                            className="cursor-pointer relative"
                        >
                            <motion.div
                                // style={{ position: 'absolute', top: `${index * itemHeight}px`, width: '100%' }}

                                className={` flex items-center gap-6 py-4 ${draggedId === country.id && 'absolute border p-4 rounded-[12px] shadow-[0px_8px_16px_0px_rgba(6,31,48,0.08)]'} `} onPointerDown={(e) => controls.start(e)}>
                                <Image src={country.src} width={60} height={60} alt={country.name} quality={100} />
                                <div>
                                    <p className={`${draggedId === country.id && 'text-[1.5rem]'}`}>{country.name}</p>
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
                {draggedId && items[items.length - 1]?.id === draggedId && <p>hello</p>}

            </Reorder.Group>
        </div>
    );
}
