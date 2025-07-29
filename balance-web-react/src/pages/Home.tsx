import BudgetPage from "../components/pages/BudgetPage";
import { useState } from "react";
import type { Budget } from "../models/Budget";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Home = () => {

  const [budgets, setBudgets] = useState<Budget[]>([{
    id: "first-budget",
    name: "First Budget",
    expenses: [],
    incomes: [],
    assetAccounts: [],
    loans: [],
    netWorth: {
      totalAssets: 0,
      totalLiabilities: 0,
      netWorth: 0,
    },
    projections: [],
  },
  {
    id: "sec-budget",
    name: "Second Budget",
    expenses: [],
    incomes: [],
    assetAccounts: [],
    loans: [],
    netWorth: {
      totalAssets: 0,
      totalLiabilities: 0,
      netWorth: 0,
    },
    projections: [],
  }]);

  // const addBudget = (budget: Budget) => {
  //   setBudgets(prev => [...prev, budget]);
  // };

  const updateBudget = (id: string, updatedBudget: Partial<Budget>) => {
    setBudgets(prev =>
      prev.map(budget =>
        budget.id === id ? { ...budget, ...updatedBudget } : budget
      )
    );
  };

  const [selectedBudgetIndex, setSelectedBudgetIndex] = useState<number>(0);

  const handleSelectBudget = (index: number) => {
    setSelectedBudgetIndex(index);
  };

  return (
    <div>
      <div className="w-full m-2 flex justify-center">
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-700 data-open:bg-gray-700">
            {budgets[selectedBudgetIndex]?.name || "Select Budget"}
            <ChevronDownIcon className="size-4 fill-white/60" />
          </MenuButton>
          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
          >
            {budgets.map((budget, idx) => (
              <MenuItem key={budget.id}>
                <button
                  className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
                  onClick={() => handleSelectBudget(idx)}
                >
                  {budget.name}
                  {selectedBudgetIndex === idx && (
                    <span className="ml-auto text-xs text-white/50">(Selected)</span>
                  )}
                </button>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>
      <BudgetPage budget={budgets[selectedBudgetIndex]} updateBudget={(updatedBudget) => updateBudget(budgets[selectedBudgetIndex].id, updatedBudget)} />
    </div>
  );
};


export default Home;


/**

fetch('./data/csv/td-jan25-jul25.csv')
            .then(response => response.text()) // or response.json() for json files
            .then(data => {
                // Process your data here
                console.log("parseCSV" + parseCSV(data));
            })
            .catch(error => console.error('Error fetching data:', error));

  // create a function that reads each non empty line in the csv file and returns an array of objects with the first line as the keys
  const parseCSV = (csv: string): JournalEntry => {
    const lines = csv.split('\n').filter(line => line.trim() !== '');
    const keys = lines[0].split(',').map(key => key.trim());
    return lines.slice(1).map(line => {
      const values = line.split(',').map(value => value.trim());
      return keys.reduce((obj, key, index) => {
        obj[key] = values[index];
        return obj;
      }, {} as Record<string, string>);
    });
  };
  create a model called JournalEntry which has a csv string, dateTransaction, description, amount, balance, credit/debit

 */