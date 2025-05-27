import React from 'react'
import { motion } from 'framer-motion'

const HomeExpect = () => {
  return (
    <motion.section className='bg-green-800 text-white rounded-3xl'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}>
      <h2 className='text-center lg:font-bold'>What You Can Expect from NuesaPedia</h2>
      <ul className="space-y-4 text-base sm:text-lg">
        <li className="border-b border-gray-400 dark:border-gray-600 pb-2">
          Free access to all PDF files for all students
        </li>
        <li className="border-b border-gray-400 dark:border-gray-600 pb-2">
          Wide range of PDF files across all departments
        </li>
        <li className="border-b border-gray-400 dark:border-gray-600 pb-2">
          User-friendly interface for easy navigation
        </li>
        <li className="border-b border-gray-400 dark:border-gray-600 pb-2">
          Open Source for all to contribute
        </li>
      </ul>
    </motion.section>
  )
}

export default HomeExpect