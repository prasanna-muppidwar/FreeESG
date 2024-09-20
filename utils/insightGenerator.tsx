// utils/insightGenerator.ts

import axios from 'axios';

export interface Insight {
  question: string;
  response: string;
}

export async function generateInsights(files: File[]): Promise<Insight[]> {
  try {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('docs', file);
    });

    const response = await axios.post('https://kukiapi123.azurewebsites.net/api/insights', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const insights: Insight[] = Object.entries(response.data.insights).map(([question, response]) => ({
      question,
      response: response as string,
    }));

    return insights;
  } catch (error) {
    console.error('Error generating insights:', error);
    throw error;
  }
}