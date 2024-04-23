const Portfolio = () => {
  return (
<div class="flex min-h-screen items-center justify-center relative bg-gradient-to-b from-yellow-300">
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white shadow-md rounded-xl">
      <thead>
        <tr class="bg-blue-gray-100 text-gray-700">
          <th class="py-3 px-4 text-left">Stock Name</th>
          <th class="py-3 px-4 text-left">Price</th>
          <th class="py-3 px-4 text-left">Quantity</th>
          <th class="py-3 px-4 text-left">Total</th>
          <th class="py-3 px-4 text-left">Action</th>
        </tr>
      </thead>
      <tbody class="text-blue-gray-900">
        <tr class="border-b border-blue-gray-200">
          <td class="py-3 px-4">Company A</td>
          <td class="py-3 px-4">$50.25</td>
          <td class="py-3 px-4">100</td>
          <td class="py-3 px-4">$5025.00</td>
          <td class="py-3 px-4">
            <a href="#" class="font-medium text-blue-600 hover:text-blue-800">Edit</a>
          </td>
        </tr>
        <tr class="border-b border-blue-gray-200">
          <td class="py-3 px-4">Company B</td>
          <td class="py-3 px-4">$75.60</td>
          <td class="py-3 px-4">150</td>
          <td class="py-3 px-4">$11340.00</td>
          <td class="py-3 px-4">
            <a href="#" class="font-medium text-blue-600 hover:text-blue-800">Edit</a>
          </td>
        </tr>
        <tr class="border-b border-blue-gray-200">
          <td class="py-3 px-4">Company C</td>
          <td class="py-3 px-4">$30.80</td>
          <td class="py-3 px-4">200</td>
          <td class="py-3 px-4">$6160.00</td>
          <td class="py-3 px-4">
            <a href="#" class="font-medium text-blue-600 hover:text-blue-800">Edit</a>
          </td>
        </tr>
        <tr class="border-b border-blue-gray-200">
          <td class="py-3 px-4 font-medium">Total Wallet Value</td>
          <td class="py-3 px-4"></td>
          <td class="py-3 px-4"></td>
          <td class="py-3 px-4 font-medium">$22525.00</td>
          <td class="py-3 px-4"></td>
        </tr>
      </tbody>
    </table>
    <div class="w-full pt-5 px-4 mb-8 mx-auto ">
      
    </div>
  </div>
</div>
  );
}


export default Portfolio