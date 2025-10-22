export const usersMockdata = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve([{
      customerName: 'Madhava',
      purchaseDate: 'Jul',
      amount: 140,
    },
    {
      customerName: 'Madhava',
      purchaseDate: 'Jul',
      amount: 160,
    },
    {
      customerName: 'Madhava',
      purchaseDate: 'Aug',
      amount: 120.9,
    },
    {
      customerName: 'Srini',
      purchaseDate: 'Aug',
      amount: 100,
    },
     {
      customerName: 'Srini',
      purchaseDate: 'Sep',
      amount: 90,
    },
    {
      customerName: 'kumar',
      purchaseDate: 'Aug',
      amount: 60,
    },
    {
      customerName: 'kumar',
      purchaseDate: 'Sep',
      amount: 50,
    },
    {
      customerName: 'vish',
      purchaseDate: 'Sep',
      amount: 50,
    }])
    },1000)
    
  })
}
