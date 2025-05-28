import {motion} from 'framer-motion'

import { FaFileInvoice ,FaDollarSign, FaTools} from "react-icons/fa";
import { GoGraph} from "react-icons/go";

const services =[
  {
    title:"Rent Invoice",
    desc:" Rent Invoice is a comprehensive tool designed to simplify the process of generating and managing invoices for rental properties. It allows property owners and managers to create customized invoices that clearly display rent due, payment history, and any additional charges like maintenance or utilities. With this tool, you can ensure that your invoices are accurate, professional, and easy to understand. ",
    icon:<FaFileInvoice  className='text-blue-500'/>
  },

  {
    title:"Expenses",
    desc:"The Expenses feature helps property owners and managers track and manage all property-related costs efficiently. You can easily log expenses such as maintenance, utilities, repairs, and other recurring costs. This tool provides a clear overview of your property’s financial health, enabling better budgeting, reducing overspending, and ensuring that all expenses are accounted for. With detailed records.",
    icon:<GoGraph  className='text-green-500' />
  },

  {
    title:"Rent Collection",
    desc:" The Rent Collection feature allows property owners to track incoming rent payments, monitor payment statuses, and send reminders for overdue rents. It streamlines the entire rent collection process, ensuring timely payments and reducing administrative work. Stay organized and on top of your rental income with ease.",
    icon:<FaDollarSign className='text-amber-900'/>
  },

  {
    title:"Repair & Maintenance",
    desc:" The Repair & Maintenance feature helps property managers log and track all repair requests and maintenance activities. From scheduling services to tracking progress, this tool ensures that issues are addressed promptly, ensuring properties are always in top condition.",
    icon:<FaTools className='text-red-600'/>
  }
]

const ServiceSection = () => {
  return (
    <div className='w-full md:h-screen pt-3 pb-4  flex flex-col items-center justify-center space-y-6 md:space-y-16  bg-stone-200'> 
    <h1 ><a className='text-gray-600 text-2xl font-playfair  border-2  border-white  py-0.5 px-3 rounded-md hover:scale-105 transition duration-300 inline-block'>Our Management Service</a></h1>

    <div className='grid md:grid-cols-2 grid-cols-1 max-w-7xl gap-3 md:gap-14'>
      {services.map((item,index) =>(
        <motion.div key={index}
        initial={{opacity:0, scale:0.9  }}
        whileInView ={{opacity:1, scale:1 }}               
        transition={{duration:0.8, ease:"easeInOut" }}
        viewport={{once:false, amount:0.2 }}
        className='md:border-4 border-2 border-white hover:border-white/45 rounded-lg p-3 mx-2.5 flex flex-col items-center space-y-2 md:space-y-4'>
          <div className='flex gap-2 items-center'>
            <h3 className='text-2xl '>{item.icon} </h3> 
            <h1 className='text-2xl font-playfair text-amber-900'>{item.title} </h1>
          </div>
          <p className='text-gray-700 text-sm md:text-lg'>{item.desc} </p>
        </motion.div>
      )
      )}
   </div>
   </div>
  )
}

export default ServiceSection