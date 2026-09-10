import React from 'react'
import FormTemplate from './components/FormTemplate'

const fields = [
  {name:'name', label:'Name', type:'text', required:true},
  {name:'email', label:'Email', type:'email', required:true},
  {name:'phone', label:'Phone', type:'text', required:false},
  {name:'vin', label:'VIN', type:'text', required:true},
  {name:'year', label:'Year', type:'text', required:false},
  {name:'make', label:'Make', type:'text', required:false},
  {name:'model', label:'Model', type:'text', required:false},
  {name:'color', label:'Color', type:'text', required:false},
  {name:'damageDescription', label:'Damage Description', type:'textarea', required:true},
  {name:'factOfLoss', label:'Fact of Loss', type:'textarea', required:false},
  {name:'message', label:'Additional Message', type:'textarea', required:false}
]

export default function Inspection(){
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <FormTemplate formType="New Vehicle Inspection Request" fields={fields} />
      </div>
    </section>
  )
}
