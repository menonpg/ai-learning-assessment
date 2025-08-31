# AI-Mediated Learning Assessment Tool

A comprehensive 5×4 diagnostic framework for personalized educational interventions.

## Live Demo
[Try the tool](https://menonpg.github.io/ai-learning-assessment/)

## Overview

This tool implements a research-based assessment framework that evaluates learners across five critical dimensions:

- **Cognitive Processing** - Information processing speed, working memory, attention regulation, metacognitive awareness
- **Socioeconomic Factors** - Resource availability, family support, economic stress, technology access
- **Emotional Well-being** - Academic anxiety, motivation, self-efficacy, stress management
- **Learning Style Preferences** - Modality preferences, social vs individual learning, processing style
- **Cultural Learning Context** - Authority expectations, struggle tolerance, communication style, independence expectations

## Features

- **20-Indicator Assessment** - Comprehensive evaluation across all dimensions
- **Real-time Risk Calculation** - Inverse scoring system where higher performance = lower risk
- **Interactive Matrix Display** - Visual representation of cross-dimensional relationships
- **Personalized Recommendations** - AI-powered suggestions based on individual profiles
- **Live GPT-5 Chat Interface** - Chat with Dr. Menon for personalized learning strategies
- **Cultural Learning Analysis** - Novel dimension based on educational psychology research
- **Auto-advance Interface** - Streamlined user experience with collapsible sections
- **Markdown-enabled Chat** - Full table and formatting support in AI responses

## Research Foundation

This tool is based on extensive research in educational psychology and AI-mediated learning. The 5×4 diagnostic matrix creates 20 key indicators that interact across dimensions to provide comprehensive learner profiles.

### Key Innovations

1. **Cultural Learning Dimension** - First framework to systematically assess cultural learning preferences
2. **Cross-dimensional Analysis** - Advanced interaction mapping between assessment dimensions  
3. **AI Integration** - Live GPT-5 powered recommendations and chat interface
4. **Risk Calculation Algorithm** - Inverse relationship modeling for accurate academic risk assessment

## Research Paper

[Read the full paper](docs/paper.pdf) - *Pending Peer Review*

## Usage

1. **Complete Assessment** - Rate yourself on 20 indicators across 5 dimensions
2. **Review Profile** - Examine your diagnostic matrix and risk assessment
3. **Get Recommendations** - Receive personalized AI-powered learning strategies
4. **Chat with Dr. Menon** - Ask questions and get specific advice based on your profile

## Technical Implementation

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **AI Integration**: Azure OpenAI GPT-5 API
- **Responsive Design**: Mobile-friendly interface
- **No Dependencies**: Self-contained single-file application
- **Markdown Parser**: Custom implementation for chat formatting

## Development

### Local Development
```bash
# Clone the repository
git clone https://github.com/menonpg/ai-learning-assessment.git
cd ai-learning-assessment

# Configure API credentials (optional - for chat feature)
cp config.template.js config.js
# Edit config.js with your Azure OpenAI credentials

# Run locally
python -m http.server 8000
# Or just open index.html in your browser
open index.html
```

### Security & Configuration
- **Assessment Tool**: Works perfectly without any configuration
- **AI Chat Feature**: Requires Azure OpenAI credentials in `config.js`
- **API Keys**: Never committed to repository (see `DEPLOYMENT.md`)
- **Graceful Degradation**: Shows helpful message when chat is not configured

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed setup instructions.

## Citation

If you use this tool in your research, please cite:

```bibtex
@misc{menon2024ai_learning_assessment,
  title={AI-Mediated Learning Assessment Tool: A 5×4 Diagnostic Framework for Personalized Educational Interventions},
  author={Menon, Prahlad},
  year={2024},
  howpublished={\url{https://github.com/menonpg/ai-learning-assessment}},
  note={PhD, PMP - ThinkCreate.ai}
}
```

## Author

**Dr. Prahlad Menon, PhD, PMP**
- Email: [prahlad.menon@quant.md](mailto:prahlad.menon@quant.md)
- Website: [www.thinkcreate.ai](https://www.thinkcreate.ai)
- GitHub: [@menonpg](https://github.com/menonpg)

## License

MIT License - see [LICENSE](LICENSE) file

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- Research foundation based on educational psychology literature
- Cultural learning dimensions inspired by cross-cultural educational research
- AI integration powered by Azure OpenAI GPT-5

---

*Developed at ThinkCreate.ai - Advancing AI-mediated learning through research and innovation.*
