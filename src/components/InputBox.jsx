export function InputBox({placeholder, onChange}) {
    return <div>
        <input onChange={onChange} placeholder={placeholder}  className="w-full text-center p-2 border rounded-md text-green-500 border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500" />        
    </div> 
  
}