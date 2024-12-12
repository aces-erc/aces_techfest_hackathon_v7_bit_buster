import React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select onValueChange={(e) => setUserData({ ...userData, role: e })} name="role" required>
        <SelectTrigger>
        <SelectValue placeholder="Select a blood group" />
        </SelectTrigger>
        <SelectContent>
        <SelectItem value="A+">A+</SelectItem>
        <SelectItem value="A-">A-</SelectItem>
        <SelectItem value="B+">B+</SelectItem>
        <SelectItem value="B-">B-</SelectItem>
        <SelectItem value="AB+">AB+</SelectItem>
        <SelectItem value="AB-">AB-</SelectItem>
        <SelectItem value="O+">O+</SelectItem>
        <SelectItem value="O-">O-</SelectItem>
        </SelectContent>
    </Select>
  )
}
