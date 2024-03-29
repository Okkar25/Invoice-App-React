import React, { useContext } from "react";
import { GeneralContext } from "../contexts/GeneralContext";
import RecordGroup from "./RecordGroup";

const RecordTable = () => {
  const { records } = useContext(GeneralContext);

  return (
    <section>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr className=" ">
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Product name
              </th>
              <th scope="col" className="px-6 py-4 text-end">
                Price
              </th>
              <th scope="col" className="px-6 py-4 text-end">
                Quantity
              </th>
              <th scope="col" className="px-6 py-4 text-end">
                Cost
              </th>
            </tr>
          </thead>

          <tbody id="recordGroup">
            <RecordGroup />
          </tbody>

          {records.length > 0 && (
            <tfoot>
              <tr className="border-b">
                <td className="px-6 py-4 text-center" colSpan="4">
                  Total
                </td>
                <td className="px-6 py-4 text-end" id="recordTotal">
                  {records
                    // .map((record) => parseFloat(record.cost))
                    .reduce((pv, cv) => pv + parseFloat(cv.cost), 0)
                    .toFixed(2)}
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>

      <div className="hidden mt-0 print:block print:mt-10 text-center">
        <p className="font-bold">ဝယ်ယူအားပေးမူ့ကို ကျေးဇူး အထူးတင်ရှိပါသည်။</p>
        <p className="text-gray-600 mt-2">နောက်လည်း လာအားပေးပါခင်ဗျာ။</p>
      </div>
    </section>
  );
};

export default RecordTable;
