
export default function GreenBox(props) {  
  return (
    
    <>
   <div class="p-3 mb-2 bg-danger text-white">
   Number: <input value={props.count} />
   <button onClick={props.AddPlayNumberGreen}>{props.Play}</button>
        <button>{props.skip}</button>
   </div>
    </>
  )
}
