'use client'

import React, { useState } from 'react'
import Image from "next/image";
import { Reorder, useDragControls, motion } from 'framer-motion'
import { ICountry } from '../interfaces/list'

const Placeholder = () => {
    <div className='w-full h-6 bg-blue-800 py-2' />
}
export default function Countries({countries}: any) {
    const [items, setItems] = useState(countries)
    const [draggedId, setDraggedId] = useState<string | null>(null)
    const controls = useDragControls();
  return (
    <div className="container mx-auto p-4">
        <Reorder.Group onReorder={setItems} values={items}>
            {items.map((country: any, index: number) => (
                <div key={country.id} className='flex flex-col gap-1'>
                {/* {draggedId && items[index-1]?.id === draggedId && <Placeholder />} */}
                <Reorder.Item key={country.id} value={country}
                onDragStart={() => setDraggedId(country.id)}
                onDragEnd={() => setDraggedId(null)}
                 whileDrag={{scale: 0.5, border: '2px solid #000', borderRadius: '12px'  }}
                dragTransition={{bounceDamping: 20, bounceStiffness: 600}}
                dragControls={controls}
                // dragListener={false} 
                className="cursor-pointer relative" 
                >
                  
                    <div className='flex items-center rounded-full gap-6 py-4' onPointerDown={(e) => controls.start(e)}>
                        <Image src={country.src} width={60} height={60} alt={country.name} quality={100} />
                        <div>
                            <p>{country.name}</p>
                            <p className='text-xs flex gap-1 items-center'>
                                <Image src='/images/svg.svg' width={15} height={15} alt={country.name} />
                                <motion.div animate={{opacity: country.place ? 1 : 0}}>{country.place}</motion.div>
                            </p>
                        </div>
                    </div>
                </Reorder.Item>
                </div>
            )) }
            {/* {draggedId && items[items.length -1 ]?.id === draggedId && <Placeholder />} */}

        </Reorder.Group>
    </div>
  );
}
