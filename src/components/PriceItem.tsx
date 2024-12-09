'use client'

import React, { FC } from 'react';
import { Check, X } from 'lucide-react';
import Link from 'next/link';
import CheckoutButton from './CheckoutButton';


interface PriceItemProps {
    item: StripeProduct,
    isLink?: boolean
    disabled?: boolean
}

const PriceItem: FC<PriceItemProps> = ({ item, isLink = false, disabled = false }) => {
    const isSubscription = item.type === 'subscription';

    return (
        <div className={`bg-white rounded-lg shadow-md p-8 ${item?.isBest ? 'border-4 border-blue-500 relative' : ''}`}>
            {item?.isBest && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-4 rounded-bl-lg text-sm font-semibold">
                    Best Value
                </div>
            )}
            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
            <p className="text-4xl font-bold mb-2">${item.price}<span className="text-xl text-gray-500 font-normal">/{isSubscription ? (item as StripePlan).period : 'one-time'}</span></p>
            {item.subtitle && <p className="text-green-600 font-semibold mb-6">{item.subtitle}</p>}
            <ul className="space-y-3 mb-8">
                {item.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        {feature.disabled ? (
                            <X className="text-red-500 mr-2" />
                        ) : (
                            <Check className="text-green-500 mr-2" />
                        )}
                        <span className={feature.disabled ? 'text-gray-400' : ''}>{feature.title}</span>
                    </li>
                ))}
            </ul>
            {isLink ? 
            <Link href={`/processing-page?priceId=${item.priceId}`} className="block w-full bg-blue-500 text-white text-center py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                {item.linkTitle}
            </Link> : 
            <CheckoutButton disabled={disabled} priceId={item.priceId} />
            }
            
            
        </div>
    );
}

export default PriceItem