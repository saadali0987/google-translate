'use client'

import { TranslationLanguages } from "@/app/translate/page"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"


function TranslationForm({ languages }: { languages: TranslationLanguages }) {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("") 
  return (
    <form>
      <div>
        <Select name="inputLanguage" defaultValue="auto">
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a Language" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel>Want us to figure it out?</SelectLabel>
              <SelectItem key="auto" value="auto">
                Auto-Detection
              </SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Language</SelectLabel>

              {Object.entries(languages.translation).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Textarea className=" min-h-32 text-xl" name="input" placeholder="Type your message here." />
      </div>




      <div>
        <Select name="outputLanguage" defaultValue="es">
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a Language" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel>Want us to figure it out?</SelectLabel>
              <SelectItem key="auto" value="auto">
                Auto-Detection
              </SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Language</SelectLabel>

              {Object.entries(languages.translation).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Textarea className=" min-h-32 text-xl" name="output" placeholder="Type your message here." />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default TranslationForm