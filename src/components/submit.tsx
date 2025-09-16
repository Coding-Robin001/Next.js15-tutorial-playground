"use client"

import { useFormStatus } from "react-dom"

type SubmitProps = {
    label: string; // e.g. "Add Animal" or "Update Animal"
}

const Submit = ({ label }: SubmitProps) => {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            disabled={pending}
        >
            {
                pending ? "submitting" : label
            }
        </button >
    )
}

export default Submit
