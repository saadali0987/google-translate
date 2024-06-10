import TranslationForm from "@/components/TranslationForm"
import { auth } from "@clerk/nextjs/server"


export type TranslationLanguages = {
  translation: {
    [key: string]: {
      name: string,
      nativeName: string,
      dir: "ltr" | "rtl"
    }
  }
}

async function TranslatePage() {
    auth().protect()

    const {userId} = auth()

    const languagesEndpoint = "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0";
    const response = await fetch(languagesEndpoint, {
        next:{
            revalidate: 60*60*24
        }
    })

    const languages = await response.json() as TranslationLanguages
    console.log(languages)
  return (
    <div>
        {/* translationForm */}
        <TranslationForm languages={languages} />

        {/* Translation history */}
    </div>
  )
}

export default TranslatePage