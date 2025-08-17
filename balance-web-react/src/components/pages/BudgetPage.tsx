import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import BudgetSummary from '../BudgetSummary';
import type { Budget } from '../../models/Budget';
import BudgetDetails from '../BudgetDetails';

type BudgetProps = {
    budget: Budget;
    updateBudget: (updatedBudget: Partial<Budget>) => void;
};


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const BudgetPage = ({ budget, updateBudget }: BudgetProps) => {
    return (
        <TabGroup>
            <TabList className="flex space-x-1 bg-blue-900/20 p-1 rounded">
                <Tab
                    className={({ selected }) =>
                        classNames(
                            'w-full py-2.5 text-sm leading-5 font-medium rounded',
                            selected
                                ? 'bg-white shadow text-blue-700'
                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                        )
                    }
                >
                    Summary
                </Tab>
                <Tab
                    className={({ selected }) =>
                        classNames(
                            'w-full py-2.5 text-sm leading-5 font-medium rounded',
                            selected
                                ? 'bg-white shadow text-blue-700'
                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                        )
                    }
                >
                    Edit
                </Tab>
            </TabList>
            <TabPanels className="m-2">
                <TabPanel>
                    {/* Replace the following line with a valid NetWorthSummary object */}
                    <BudgetSummary summary={budget.netWorth} />
                </TabPanel>
                <TabPanel>
                    <div>
                        <BudgetDetails budget={budget} updateBudget={(updatedBudget) => updateBudget(updatedBudget)}/>
                    </div>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    );
};

export default BudgetPage;