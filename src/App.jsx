import { useState, useEffect } from 'react'
import format from 'string-format';


const Input = ({
  onChange = () => { },
  text,
  label
}) => {
  return (
    <div class="mb-6">
      <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <input
        type="text"
        id="large-input"
        class="block p-4 w-96 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

const Textarea = ({
  onChange = () => { },
  text,
  label = "Prompt"
}) => {

  return (
    <div>
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <textarea
        id="message"
        rows="12"
        class="block p-2.5 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write your Prompt here...."
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />

    </div>
  )

}


const Divider = () => {
  return (

    <div class="border-t border-gray-400"></div>

  )
}

const OutputBox = ({
  value
}) => {
  const [buttonText, setButtonText] = useState('Copy');

  return (
    <div>
      <Textarea
        text={value}
        label="Output"
      />
      <button
        onClick={() => { 
          navigator.clipboard.writeText(value) 
          setButtonText('Copied!')
          setTimeout(() => {
            setButtonText("Copy")
          }, 1000)
        }}
        disabled={buttonText !== "Copy"}
        class="my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-24 py-2.5 text-center items-center inline-flex justify-center">
        <span id="default-message">{buttonText}</span>
      </button>
    </div>
  )
}



function replaceVariables(templateString, dataObject) {
  // Regular expression to match variables inside curly braces {}
  const variableRegex = /{([^}]+)}/g;
  console.log(dataObject)

  // Replace variables in the template string with values from the data object
  return templateString.replace(variableRegex, (match, variable) => {
    // Trim the variable to remove leading/trailing spaces
    console.log('match', match);
    console.log('variable', variable);
    variable = variable.trim();
    // Check if the variable exists in the data object
    if (dataObject.hasOwnProperty(variable)) {
      console.log(dataObject.hasOwnProperty(variable))
      return dataObject[variable];
    } else {
      // If the variable does not exist in the data object, leave it unchanged
      return match;
    }
  });
}


export default function App() {

  const [prompt, setPrompt] = useState("");
  const [variable_1, setVariable_1] = useState("");
  const [variable_2, setVariable_2] = useState("");

  const [output, setOutput] = useState("")

  useEffect(() => {
    const outputText = replaceVariables(prompt, { variable_1, variable_2 })
    console.log(outputText)
    setOutput(outputText)
  }, [prompt, variable_1, variable_2])

  const example = {
    prompt: `You are a flutter developer with more than 5 years of experience. This is the error im facing: 
    -----------
    "{variable_1}"
    -----------
    Please review my code given below and figure out what is causing this error
    \`\`\`
    {variable_2}
    \`\`\`
    `,
    variable_1: "Task failed successfully at line number: 69",
    variable_2: "const number = number + 5"
  }

  const onFillExample = (e) => {
    e.preventDefault();
    setPrompt(example.prompt)
    setVariable_1(example.variable_1)
    setVariable_2(example.variable_2)

  }



  return (
    <div className='px-10 py-1 text-gray-900'>
      <div className='my-5 text-sm '>
        <button className='underline text-blue-900'
          onClick={(e) => onFillExample(e)}
        >Fill Example Content</button>
      </div>
      <Textarea
        text={prompt}
        onChange={setPrompt}
      />
      <br />
      <Input
        label="variable_1"
        text={variable_1}
        onChange={setVariable_1}
      />
      <Input
        label="variable_2"
        text={variable_2}
        onChange={setVariable_2}
      />
      <Divider />
      <OutputBox
        value={output}
      />

    </div>
  )
}

