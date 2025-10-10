"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"
import WaveAudio from "@/components/ui/wave-audio"

export type TracksColumn
    = {
        id: string
        name: string
        thumbnail: string
        url: string
        duration: string
        bpm: number
        createdAt: string
    }

export const columns: ColumnDef<TracksColumn>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "thumbnail",
        header: "Thumbnail",
        cell: ({ row }) => (
            <img
                src={row.original.thumbnail}
                alt={row.original.name}
                className="h-10 w-10 rounded-md"
            />
        )
    },
    {
        accessorKey: "url",
        header: "Preview",
        cell: ({ row }) => (
            <WaveAudio url={row.original.url} />
        )
    }
    ,
    {
        accessorKey: "duration",
        header: "Duration",
    },
    {
        accessorKey: "bpm",
        header: "BPM",
    },
    {
        accessorKey: "createdAt",
        header: "Date",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    }
]