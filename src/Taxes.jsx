import React from 'react'
import FormTemplate from './components/FormTemplate'

const fields = [
  {name:'name', label:'Name', type:'text', required:true},
  {name:'phone', label:'Phone', type:'text', required:true},
  {name:'email', label:'Email', type:'email', required:true},
  {name:'message', label:'Additional Message', type:'textarea', required:false}
]

export default function Taxes(){
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <FormTemplate formType="Taxes & Notary" fields={fields} />
      </div>
    </section>
  )
}
