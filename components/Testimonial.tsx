"use client"

import {useState} from "react";
import {Card, CardContent} from "@/components/ui/card";
import StarRating from "@/components/star-rating";
import {Button} from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react"

interface TestimonialProps {
    name: string
    rating: number
    title: string
    text: string
    date: string
}

export default function Testimonial({ name, rating, title, text, date }: TestimonialProps) {
    const [isExpanded, setIsExpanded] = useState(false)
    const maxLength = 150
    const isTruncated = text.length > maxLength

    const truncatedText = isTruncated && !isExpanded ? `${text.substring(0, maxLength)}...` : text

    return (
        <Card className="border-none bg-gradient-to-br from-[#2d1e3a]/80 to-[#3d2035]/80 shadow-lg backdrop-blur-sm mx-2">
            <CardContent className="w-80 p-4 md:p-6 flex flex-col h-full justify-between">
                <div>
                    <div className="mb-3 flex items-center justify-between md:mb-4">
                        <StarRating rating={rating} />
                        <span className="text-xs text-[#f5f0d9]/70 md:text-sm">{date}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-[#f5f0d9]">{title}</h3>
                    <div>
                        <p className="text-sm text-[#f5f0d9] md:text-base">{truncatedText}</p>

                        {isTruncated && (
                            <Button
                                variant="ghost"
                                size="sm"
                                className="flex items-center gap-1 p-0 text-[#ff8c4d] hover:bg-transparent hover:text-[#ff8c4d]/80"
                                onClick={() => setIsExpanded(!isExpanded)}
                            >
                                {isExpanded ? (
                                    <>
                                        Weniger anzeigen <ChevronUp className="h-4 w-4" />
                                    </>
                                ) : (
                                    <>
                                        Mehr anzeigen <ChevronDown className="h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        )}
                    </div>
                </div>
                <p className="mt-3 font-medium text-[#ff8c4d]">{name}</p>
            </CardContent>
        </Card>
    )
}