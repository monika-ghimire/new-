
export default function RedBox(props) {
    
    
  return (
    
    <>
   <div class="p-3 mb-2 bg-danger text-white">
   Number: <input value={props.count} />
   <button onclick={props.AddPlayNumberRed}>{props.Play}</button>
        <button>{props.skip}</button>
   </div>
    </>
  )
}

