// path src\common\components\LanguageComponent.tsx
import React from 'react'

export type LanguageComponentProps = {
  useLanguage: () => {
    currentLanguage: string
    setCurrentLanguage: (language: string) => void
  }
}

const LanguageComponent: React.FC<LanguageComponentProps> = ({
  useLanguage,
}) => {
  const { currentLanguage, setCurrentLanguage } = useLanguage()
  return (
    <div>
      <h1>Current Language: {currentLanguage}</h1>
      <button onClick={() => setCurrentLanguage('en')}>Set English</button>
      <button onClick={() => setCurrentLanguage('fr')}>Set French</button>
    </div>
  )
}

export default LanguageComponent
