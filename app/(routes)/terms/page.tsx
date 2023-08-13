import React from 'react';

const TermsPrivacyCancelation = () => {
  return (
    <div>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="mb-4">
          Welcome to Aromart. By using our platform and placing orders for food and groceries, you agree to the following terms:
        </p>

        <h2 className="text-xl font-semibold mb-4">Food and Groceries Delivery Service:</h2>
        <p className="mb-4">
        Aromart acts as an intermediary, providing a platform for ordering food and groceries from local restaurants and stores.
        </p>

        <h2 className="text-xl font-semibold mb-4">Order Placement and Delivery:</h2>
        <p className="mb-4">
          When placing an order, you agree to purchase the selected items at the specified price.
        </p>

        <h2 className="text-xl font-semibold mb-4">Cancellation and Returns:</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            You can cancel an order before it is prepared for delivery. Once the order is prepared, cancellation is not possible.You have call us for this.
          </li>
          <li>
            In case of any issues with the delivered items, such as damage or incorrect products, please contact our customer support within 10-30 minutes for assistance.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Payment Options:</h2>
        <p className="mb-4">
          We offer only Cash on Delivery (COD) for now. Online payment options are to be established soon.
        </p>

        <h2 className="text-xl font-semibold mb-4">Limitation of Liability:</h2>
        <p className="mb-4">
        Aromart is not liable for any damages arising from the use of our platform or services.
        </p>

        <h2 className="text-xl font-semibold mb-4">Privacy:</h2>
        <p className="mb-4">
          Your personal information is protected as outlined in our Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold mb-4">Modification of Terms:</h2>
        <p className="mb-4">
          We may update these terms, so please review them regularly.
        </p>

        <p className="mb-4">
          If you have any questions, contact us via the contact page on our app.
        </p>

        <p>
          Thank you for choosing Aromart! Enjoy your food and grocery deliveries.
        </p>
      </div>
    </div>
  );
};

export default TermsPrivacyCancelation;
