import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { motion } from "framer-motion";

const MortgageCalculator = () => {
  const [data, setData] = useState([
    { name: "Down Payment", value: 500000 },
    { name: "Loan Principal", value: 1500000 },
    { name: "Interest", value: 0 },
    { name: "Tax", value: 300000 },
    { name: "Insurance", value: 200000 },
  ]);

  const [inputs, setInputs] = useState({
    price: 2000000,
    downPayment: 500000,
    interest: 8,
    years: 20,
    tax: 15000,
    insurance: 10000,
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: +e.target.value });
  };

  const calculate = () => {
    const loanAmount = inputs.price - inputs.downPayment;
    const months = inputs.years * 12;
    const monthlyInterest = inputs.interest / 100 / 12;

    const monthlyPayment =
      (loanAmount * monthlyInterest) /
      (1 - Math.pow(1 + monthlyInterest, -months));

    const totalLoan = monthlyPayment * months;
    const totalTax = inputs.tax * inputs.years;
    const totalInsurance = inputs.insurance * inputs.years;
    const totalInterest = totalLoan - loanAmount;

    setData([
      { name: "Down Payment", value: inputs.downPayment },
      { name: "Loan Principal", value: loanAmount },
      { name: "Interest", value: totalInterest },
      { name: "Tax", value: totalTax },
      { name: "Insurance", value: totalInsurance },
    ]);
  };

  const formContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Delay between each field
    },
  },
};

const formItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8 },
  },
};

  const COLORS = ["#4ade80", "#60a5fa", "#facc15", "#f87171", "#a78bfa"];

  // Calculate the total payment from the data
  const totalPayment = data.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <div className="min-h-screen bg-stone-300 flex items-center justify-center  md:p-4 p-2">
      <div className="max-w-7xl w-full bg-gray-100 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          🏠 Mortgage Calculator
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Calculator Form */}
          <div>
            <motion.div
            className="grid grid-cols-1 gap-6 mb-6"
            variants={formContainer}
            initial="hidden"
            animate="visible"
>
              {[
                { label: "Property Price (₹)", name: "price" },
                { label: "Down Payment (₹)", name: "downPayment" },
                { label: "Interest Rate (%)", name: "interest" },
                { label: "Loan Term (Years)", name: "years" },
                { label: "Property Tax (₹/year)", name: "tax" },
                { label: "Insurance (₹/year)", name: "insurance" },
              ].map((field) => (
                <motion.div key={field.name}  variants={formItem}>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    {field.label}
                  </label>
                  <input
                    type="number"
                    name={field.name}
                    value={inputs[field.name]}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </motion.div>
              ))}
            </motion.div >

            <button
              onClick={calculate}
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
            >
              Calculate
            </button>
          </div>

          {/* Right: Pie Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col  items-center"
          >
            <PieChart width={500} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={140}
                dataKey="value"
                label
                isAnimationActive
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "transparent", border: "none" }}
                formatter={(value) =>
                  new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                    minimumFractionDigits: 0,
                  }).format(value)
                }
              />
              <Legend />
            </PieChart>

            {/* Display Total Payment Below the Pie */}
            <div className="mt-4 text-lg font-semibold text-gray-700">
              Total Payment:{" "}
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 0,
              }).format(totalPayment)}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
