// AgentLoop.ts with OpenAI support

import OpenAI from 'openai';

class AgentLoop {
    constructor(apiKey) {
        this.client = new OpenAI({ apiKey });
    }

    async fetchResponse(prompt) {
        try {
            const response = await this.client.completions.create({
                model: 'text-davinci-003',
                prompt: prompt,
                maxTokens: 150
            });
            return response.choices[0].text.trim();
        } catch (error) {
            console.error('Error fetching response from OpenAI:', error);
            throw error;
        }
    }

    async run(prompt) {
        const response = await this.fetchResponse(prompt);
        console.log('AI Response:', response);
        // Add more logic to handle the response accordingly
    }
}

export default AgentLoop;