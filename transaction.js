var transactions = [
    { nom_client: "Client 1", montant: 1000 },
    { nom_client: "Client 2", montant: 2000 }
  ];
  
  export function get_transactions() {
    return transactions;
  }
  
  export function get_transaction(transaction_number) {
    return transactions[transaction_number];
  }
  
  export function new_transaction(customer_name, amount) {
    let transaction ={ nom_client: customer_name, montant: amount }
    transactions.push(transaction);
  }