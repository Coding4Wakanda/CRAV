import React, { useState } from 'react';

const MealPlanner = () => {
  const [goal, setGoal] = useState('');
  const [preferences, setPreferences] = useState('');
  const [restrictions, setRestrictions] = useState('');
  const [mealPlan, setMealPlan] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:5000/api/meal-plan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ goal, preferences, restrictions }),
    });

    const data = await res.json();
    setMealPlan(data.mealPlan);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">AI Meal Prep Planner</h1>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Your health goal (e.g., fat loss, muscle gain)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2"
        placeholder="Food preferences (e.g., vegan, spicy, Asian)"
        value={preferences}
        onChange={(e) => setPreferences(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2"
        placeholder="Restrictions (e.g., no gluten, allergies)"
        value={restrictions}
        onChange={(e) => setRestrictions(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Generate Meal Plan
      </button>

      {mealPlan && (
        <pre className="mt-4 bg-gray-100 p-4 rounded overflow-auto whitespace-pre-wrap">
          {mealPlan}
        </pre>
      )}
    </div>
  );
};

export default MealPlanner;

