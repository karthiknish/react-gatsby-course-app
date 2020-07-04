const stripe = require("stripe")(
  "sk_test_51H1EiXEv3D34zHMV4rIoPb6cSt4xa4PecAITP788Y1chyAHS87jsK0WAswq9G0v17J3FN15dWTvn7u7jwZUFxPOP007ae9mqVv"
)
exports.handler = async function (event) {
  const { tokenId, email, name, description, amount } = JSON.stringify(
    event.body
  )
  const customer = await stripe.customers.create({
    description: email,
    source: tokenId,
  })
  await stripe.charges.create({
    customer: customer.id,
    amount,
    name,
    description,
    currency: "usd",
  })
}
