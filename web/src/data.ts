export interface Resource {
  title: string;
  url: string;
  description?: string;
}

export interface Subsection {
  id: string;
  title: string;
  content: string[];
  resources: Resource[];
  image?: string;
}

export interface Section {
  id: string;
  title: string;
  icon: string;
  description: string;
  image?: string;
  subsections: Subsection[];
}

export interface Notebook {
  name: string;
  description: string;
  articleUrl?: string;
  notebookUrl: string;
}

export interface NotebookCategory {
  title: string;
  items: Notebook[];
}

export const courseData = {
  hero: {
    title: "LLM Course",
    banner: "/img/banner.png",
    description: "The LLM course is divided into three parts: Fundamentals, Scientist, and Engineer.",
    social: [
      { name: "X", url: "https://twitter.com/maximelabonne" },
      { name: "Hugging Face", url: "https://huggingface.co/mlabonne" },
      { name: "Blog", url: "https://mlabonne.github.io/blog" },
      { name: "Handbook", url: "https://packt.link/a/9781836200079" }
    ]
  },
  notebooks: [
    {
      title: "Tools",
      items: [
        { name: "LLM AutoEval", description: "Automatically evaluate your LLMs using RunPod", notebookUrl: "https://colab.research.google.com/drive/1Igs3WZuXAIv9X0vwqiE90QlEPys8e8Oa?usp=sharing" },
        { name: "LazyMergekit", description: "Easily merge models using MergeKit in one click.", notebookUrl: "https://colab.research.google.com/drive/1obulZ1ROXHjYLn6PPZJwRR6GzgQogxxb?usp=sharing" },
        { name: "LazyAxolotl", description: "Fine-tune models in the cloud using Axolotl in one click.", notebookUrl: "https://colab.research.google.com/drive/1TsDKNo2riwVmU55gjuBgB1AXVtRRfRHW?usp=sharing" },
        { name: "AutoQuant", description: "Quantize LLMs in GGUF, GPTQ, EXL2, AWQ, and HQQ formats in one click.", notebookUrl: "https://colab.research.google.com/drive/1b6nqC7UZVt8bx4MksX7s656GXPM-eWw4?usp=sharing" },
        { name: "Model Family Tree", description: "Visualize the family tree of merged models.", notebookUrl: "https://colab.research.google.com/drive/1s2eQlolcI1VGgDhqWIANfkfKvcKrMyNr?usp=sharing" },
        { name: "ZeroSpace", description: "Automatically create a Gradio chat interface using a free ZeroGPU.", notebookUrl: "https://colab.research.google.com/drive/1LcVUW5wsJTO2NGmozjji5CkC--646LgC" },
        { name: "AutoAbliteration", description: "Automatically abliteration models with custom datasets.", notebookUrl: "https://colab.research.google.com/drive/1RmLv-pCMBBsQGXQIM8yF-OdCNyoylUR1?usp=sharing" },
        { name: "AutoDedup", description: "Automatically deduplicate datasets using the Rensa library.", notebookUrl: "https://colab.research.google.com/drive/1o1nzwXWAa8kdkEJljbJFW1VuI-3VZLUn?usp=sharing" }
      ]
    },
    {
      title: "Fine-tuning",
      items: [
        { name: "Fine-tune Llama 3.1 with Unsloth", description: "Ultra-efficient supervised fine-tuning in Google Colab.", articleUrl: "https://mlabonne.github.io/blog/posts/2024-07-29_Finetune_Llama31.html", notebookUrl: "https://colab.research.google.com/drive/164cg_O7SV7G8kZr_JXqLd6VC7pd86-1Z?usp=sharing" },
        { name: "Fine-tune Llama 3 with ORPO", description: "Cheaper and faster fine-tuning in a single stage with ORPO.", articleUrl: "https://mlabonne.github.io/blog/posts/2024-04-19_Fine_tune_Llama_3_with_ORPO.html", notebookUrl: "https://colab.research.google.com/drive/1eHNWg9gnaXErdAa8_mcvjMupbSS6rDvi" },
        { name: "Fine-tune Mistral-7b with DPO", description: "Boost the performance of supervised fine-tuned models with DPO.", articleUrl: "https://mlabonne.github.io/blog/posts/Fine_tune_Mistral_7b_with_DPO.html", notebookUrl: "https://colab.research.google.com/drive/15iFBr1xWgztXvhrj5I9fBv20c7CFOPBE?usp=sharing" },
        { name: "Fine-tune Mistral-7b with QLoRA", description: "Supervised fine-tune Mistral-7b in a free-tier Google Colab with TRL.", notebookUrl: "https://colab.research.google.com/drive/1o_w0KastmEJNVwT5GoqMCciH-18ca5WS?usp=sharing" },
        { name: "Fine-tune CodeLlama using Axolotl", description: "End-to-end guide to the state-of-the-art tool for fine-tuning.", articleUrl: "https://mlabonne.github.io/blog/posts/A_Beginners_Guide_to_LLM_Finetuning.html", notebookUrl: "https://colab.research.google.com/drive/1Xu0BrCB7IShwSWKVcfAfhehwjDrDMH5m?usp=sharing" },
        { name: "Fine-tune Llama 2 with QLoRA", description: "Step-by-step guide to supervised fine-tune Llama 2 in Google Colab.", articleUrl: "https://mlabonne.github.io/blog/posts/Fine_Tune_Your_Own_Llama_2_Model_in_a_Colab_Notebook.html", notebookUrl: "https://colab.research.google.com/drive/1PEQyJO1-f6j0S_XJ8DV50NkpzasXkrzd?usp=sharing" }
      ]
    },
    {
      title: "Quantization",
      items: [
        { name: "Introduction to Quantization", description: "Large language model optimization using 8-bit quantization.", articleUrl: "https://mlabonne.github.io/blog/posts/Introduction_to_Weight_Quantization.html", notebookUrl: "https://colab.research.google.com/drive/1DPr4mUQ92Cc-xf4GgAaB6dFcFnWIvqYi?usp=sharing" },
        { name: "4-bit Quantization using GPTQ", description: "Quantize your own open-source LLMs to run them on consumer hardware.", articleUrl: "https://mlabonne.github.io/blog/4bit_quantization/", notebookUrl: "https://colab.research.google.com/drive/1lSvVDaRgqQp_mWK_jC9gydz6_-y6Aq4A?usp=sharing" },
        { name: "Quantization with GGUF and llama.cpp", description: "Quantize Llama 2 models with llama.cpp and upload GGUF versions to the HF Hub.", articleUrl: "https://mlabonne.github.io/blog/posts/Quantize_Llama_2_models_using_ggml.html", notebookUrl: "https://colab.research.google.com/drive/1pL8k7m04mgE5jo2NrjGi8atB0j_37aDD?usp=sharing" },
        { name: "ExLlamaV2: The Fastest Library to Run LLMs", description: "Quantize and run EXL2 models and upload them to the HF Hub.", articleUrl: "https://mlabonne.github.io/blog/posts/ExLlamaV2_The_Fastest_Library_to_Run%C2%A0LLMs.html", notebookUrl: "https://colab.research.google.com/drive/1yrq4XBlxiA0fALtMoT2dwiACVc77PHou?usp=sharing" }
      ]
    },
    {
      title: "Other",
      items: [
        { name: "Merge LLMs with MergeKit", description: "Create your own models easily, no GPU required!", articleUrl: "https://mlabonne.github.io/blog/posts/2024-01-08_Merge_LLMs_with_mergekit%20copy.html", notebookUrl: "https://colab.research.google.com/drive/1_JS7JKJAQozD48-LhYdegcuuZ2ddgXfr?usp=sharing" },
        { name: "Create MoEs with MergeKit", description: "Combine multiple experts into a single frankenMoE", articleUrl: "https://mlabonne.github.io/blog/posts/2024-03-28_Create_Mixture_of_Experts_with_MergeKit.html", notebookUrl: "https://colab.research.google.com/drive/1obulZ1ROXHjYLn6PPZJwRR6GzgQogxxb?usp=sharing" },
        { name: "Uncensor any LLM with abliteration", description: "Fine-tuning without retraining", articleUrl: "https://mlabonne.github.io/blog/posts/2024-06-04_Uncensor_any_LLM_with_abliteration.html", notebookUrl: "https://colab.research.google.com/drive/1VYm3hOcvCpbGiqKZb141gJwjdmmCcVpR?usp=sharing" },
        { name: "Improve ChatGPT with Knowledge Graphs", description: "Augment ChatGPT's answers with knowledge graphs.", articleUrl: "https://mlabonne.github.io/blog/posts/Article_Improve_ChatGPT_with_Knowledge_Graphs.html", notebookUrl: "https://colab.research.google.com/drive/1mwhOSw9Y9bgEaIFKT4CLi0n18pXRM4cj?usp=sharing" },
        { name: "Decoding Strategies in LLMs", description: "A guide to text generation from beam search to nucleus sampling", articleUrl: "https://mlabonne.github.io/blog/posts/2022-06-07-Decoding_strategies.html", notebookUrl: "https://colab.research.google.com/drive/19CJlOS5lI29g-B3dziNn93Enez1yiHk2?usp=sharing" }
      ]
    }
  ],
  sections: [
    {
      id: "fundamentals",
      title: "LLM Fundamentals",
      icon: "Puzzle",
      description: "This section introduces essential knowledge about mathematics, Python, and neural networks. You might not want to start here but refer to it as needed.",
      image: "/img/roadmap_fundamentals.png",
      subsections: [
        {
          id: "math",
          title: "1. Mathematics for Machine Learning",
          content: [
            "Linear Algebra: Key concepts include vectors, matrices, determinants, eigenvalues and eigenvectors, vector spaces, and linear transformations.",
            "Calculus: Optimization of continuous functions, derivatives, integrals, limits, and gradients.",
            "Probability and Statistics: Probability theory, random variables, distributions, expectations, variance, hypothesis testing, and Bayesian inference."
          ],
          resources: [
            { title: "3Blue1Brown - The Essence of Linear Algebra", url: "https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" },
            { title: "StatQuest - Statistics Fundamentals", url: "https://www.youtube.com/watch?v=qBigTkBLU6g&list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9" },
            { title: "Seeing Theory", url: "https://seeing-theory.brown.edu/" },
            { title: "Immersive Linear Algebra", url: "https://immersivemath.com/ila/learnmore.html" },
            { title: "Khan Academy - Linear Algebra", url: "https://www.khanacademy.org/math/linear-algebra" },
            { title: "Khan Academy - Calculus", url: "https://www.khanacademy.org/math/calculus-1" },
            { title: "Khan Academy - Probability and Statistics", url: "https://www.khanacademy.org/math/statistics-probability" }
          ]
        },
        {
          id: "python",
          title: "2. Python for Machine Learning",
          content: [
            "Python Basics: Syntax, data types, error handling, and OOP.",
            "Data Science Libraries: NumPy, Pandas, Matplotlib, and Seaborn.",
            "Data Preprocessing: Scaling, normalization, missing data, and outlier detection.",
            "Machine Learning Libraries: Scikit-learn, regression, classification, clustering, and PCA/t-SNE."
          ],
          resources: [
            { title: "Real Python", url: "https://realpython.com/" },
            { title: "freeCodeCamp - Learn Python", url: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
            { title: "Python Data Science Handbook", url: "https://jakevdp.github.io/PythonDataScienceHandbook/" },
            { title: "freeCodeCamp - Machine Learning for Everybody", url: "https://youtu.be/i_LwzRVP7bg" },
            { title: "Udacity - Intro to Machine Learning", url: "https://www.udacity.com/course/intro-to-machine-learning--ud120" }
          ]
        },
        {
          id: "neural-networks",
          title: "3. Neural Networks",
          content: [
            "Fundamentals: Layers, weights, biases, and activation functions (sigmoid, tanh, ReLU, etc.).",
            "Training and Optimization: Backpropagation, loss functions (MSE, Cross-Entropy), and optimizers (SGD, RMSprop, Adam).",
            "Overfitting: Regularization techniques (dropout, L1/L2, early stopping, data augmentation).",
            "Implementation: Building a Multilayer Perceptron (MLP) using PyTorch."
          ],
          resources: [
            { title: "3Blue1Brown - But what is a Neural Network?", url: "https://www.youtube.com/watch?v=aircAruvnKk" },
            { title: "freeCodeCamp - Deep Learning Crash Course", url: "https://www.youtube.com/watch?v=VyWAvY2CF9c" },
            { title: "Fast.ai - Practical Deep Learning", url: "https://course.fast.ai/" },
            { title: "Patrick Loeber - PyTorch Tutorials", url: "https://www.youtube.com/playlist?list=PLqnslRFeH2UrcDBWF5mfPGpqQDSta6VK4" }
          ]
        },
        {
          id: "nlp",
          title: "4. Natural Language Processing (NLP)",
          content: [
            "Text Preprocessing: Tokenization, stemming, lemmatization, and stop word removal.",
            "Feature Extraction: Bag-of-words (BoW), TF-IDF, and n-grams.",
            "Word Embeddings: Word2Vec, GloVe, and FastText.",
            "RNNs: LSTMs and GRUs for sequence data and long-term dependencies."
          ],
          resources: [
            { title: "Lena Voita - Word Embeddings", url: "https://lena-voita.github.io/nlp_course/word_embeddings.html" },
            { title: "RealPython - NLP with spaCy", url: "https://realpython.com/natural-language-processing-spacy-python/" },
            { title: "Kaggle - NLP Guide", url: "https://www.kaggle.com/learn-guide/natural-language-processing" },
            { title: "Jay Alammar - Illustrated Word2Vec", url: "https://jalammar.github.io/illustrated-word2vec/" },
            { title: "Jake Tae - PyTorch RNN from Scratch", url: "https://jaketae.github.io/study/pytorch-rnn/" },
            { title: "colah's blog - Understanding LSTM Networks", url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/" }
          ]
        }
      ]
    },
    {
      id: "scientist",
      title: "The LLM Scientist",
      icon: "Microscope",
      description: "Focuses on learning how to build the best possible LLMs using the latest techniques.",
      image: "/img/roadmap_scientist.png",
      subsections: [
        {
          id: "architecture",
          title: "1. The LLM Architecture",
          content: [
            "Architectural overview: Evolution from encoder-decoder to decoder-only Transformers.",
            "Tokenization: Numerical representations and their impact on performance.",
            "Attention mechanisms: Self-attention variants for long-range dependencies.",
            "Sampling techniques: Tradeoffs between greedy/beam search and probabilistic sampling."
          ],
          resources: [
            { title: "Visual intro to Transformers", url: "https://www.youtube.com/watch?v=wjZofJX0v4M" },
            { title: "LLM Visualization", url: "https://bbycroft.net/llm" },
            { title: "nanoGPT by Andrej Karpathy", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY" },
            { title: "Attention? Attention! by Lilian Weng", url: "https://lilianweng.github.io/posts/2018-06-24-attention/" },
            { title: "Decoding Strategies in LLMs", url: "https://mlabonne.github.io/blog/posts/2023-06-07-Decoding_strategies.html" }
          ]
        },
        {
          id: "pretraining",
          title: "2. Pre-Training Models",
          content: [
            "Data preparation: Curation, cleaning, deduplication, and filtering (e.g., Llama 3.1 15T tokens).",
            "Distributed training: Data, pipeline, and tensor parallelization strategies.",
            "Training optimization: Adaptive learning rates, AdamW/Lion optimizers, and mixed-precision.",
            "Monitoring: Performance profiling and metrics tracking across GPU clusters."
          ],
          resources: [
            { title: "FineWeb by Hugging Face", url: "https://huggingface.co/spaces/HuggingFaceFW/blogpost-fineweb-v1" },
            { title: "RedPajama v2 by Together AI", url: "https://www.together.ai/blog/redpajama-data-v2" },
            { title: "nanotron by Hugging Face", url: "https://github.com/huggingface/nanotron" },
            { title: "Distributed training survey", url: "https://arxiv.org/abs/2407.20018" },
            { title: "OLMo 2 by AI2", url: "https://allenai.org/olmo" },
            { title: "LLM360 Framework", url: "https://www.llm360.ai/" }
          ]
        },
        {
          id: "posttraining",
          title: "3. Post-Training Datasets",
          content: [
            "Storage & templates: Formats like ShareGPT mapped to templates (ChatML, Alpaca).",
            "Synthetic data: Instruction-response pairs generated by frontier models.",
            "Data enhancement: Verified outputs, rejection sampling, and Chain-of-Thought.",
            "Quality filtering: MinHash deduplication, n-gram decontamination, and judge LLMs."
          ],
          resources: [
            { title: "Synthetic Data Generator by Argilla", url: "https://huggingface.co/spaces/argilla/synthetic-data-generator" },
            { title: "LLM Datasets by Maxime Labonne", url: "https://github.com/mlabonne/llm-datasets" },
            { title: "NeMo-Curator by Nvidia", url: "https://github.com/NVIDIA/NeMo-Curator" },
            { title: "Distilabel by Argilla", url: "https://distilabel.argilla.io/dev/sections/pipeline_samples/" },
            { title: "Semhash for deduplication", url: "https://github.com/MinishLab/semhash" }
          ]
        },
        {
          id: "sft",
          title: "4. Supervised Fine-Tuning (SFT)",
          content: [
            "Techniques: Full fine-tuning vs. Parameter-efficient (LoRA, QLoRA).",
            "Frameworks: TRL, Unsloth, and Axolotl for efficient training.",
            "Parameters: Learning rate, batch size, weight decay, and LoRA specific settings.",
            "Distributed: DeepSpeed ZeRO stages and FSDP for scaling."
          ],
          resources: [
            { title: "Fine-tune Llama 3.1 with Unsloth", url: "https://huggingface.co/blog/mlabonne/sft-llama3" },
            { title: "Axolotl Documentation", url: "https://axolotl-ai-cloud.github.io/axolotl/" },
            { title: "Mastering LLMs by Hamel Husain", url: "https://parlance-labs.com/education/" },
            { title: "LoRA insights by Sebastian Raschka", url: "https://lightning.ai/pages/community/lora-insights/" }
          ]
        },
        {
          id: "preference",
          title: "5. Preference Alignment",
          content: [
            "Algorithms: DPO (Direct Preference Optimization), GRPO, and PPO.",
            "Rejection sampling: Creating on-policy data for stable alignment.",
            "Reward modeling: Training models to predict human preferences.",
            "Reinforcement Learning: Maximizing rewards for reasoning models."
          ],
          resources: [
            { title: "Illustrating RLHF by Hugging Face", url: "https://huggingface.co/blog/rlhf" },
            { title: "LLM Training: RLHF and Alternatives", url: "https://magazine.sebastianraschka.com/p/llm-training-rlhf-and-its-alternatives" },
            { title: "Preference Tuning comparison", url: "https://huggingface.co/blog/pref-tuning" },
            { title: "Fine-tune with GRPO tutorial", url: "https://huggingface.co/learn/llm-course/en/chapter12/5" }
          ]
        },
        {
          id: "evaluation",
          title: "6. Evaluation",
          content: [
            "Automated benchmarks: Task-specific metrics like MMLU.",
            "Human evaluation: Systematic vibe checks and Chatbot Arena voting.",
            "Model-based evaluation: Using judge/reward models to score outputs.",
            "Feedback signal: Analyzing error patterns to identify weaknesses."
          ],
          resources: [
            { title: "LLM evaluation guidebook", url: "https://huggingface.co/spaces/OpenEvals/evaluation-guidebook" },
            { title: "Open LLM Leaderboard", url: "https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard" },
            { title: "LM Evaluation Harness", url: "https://github.com/EleutherAI/lm-evaluation-harness" },
            { title: "Chatbot Arena (LMSYS)", url: "https://lmarena.ai/" }
          ]
        },
        {
          id: "quantization",
          title: "7. Quantization",
          content: [
            "Precision: FP32, FP16, INT8, and 4-bit representations.",
            "Tools: llama.cpp and GGUF format for consumer-grade hardware.",
            "Advanced: GPTQ, AWQ, and EXL2 for layer-by-layer calibration.",
            "Outlier mitigation: SmoothQuant and ZeroQuant optimizations."
          ],
          resources: [
            { title: "Introduction to quantization", url: "https://mlabonne.github.io/blog/posts/Introduction_to_Weight_Quantization.html" },
            { title: "Quantize with llama.cpp tutorial", url: "https://mlabonne.github.io/blog/posts/Quantize_Llama_2_models_using_ggml.html" },
            { title: "4-bit Quantization with GPTQ", url: "https://mlabonne.github.io/blog/posts/4_bit_Quantization_with_GPTQ.html" },
            { title: "Activation-Aware Quantization (AWQ)", url: "https://medium.com/friendliai/understanding-activation-aware-weight-quantization-awq-boosting-inference-serving-efficiency-in-10bb0faf63a8" }
          ]
        },
        {
          id: "trends",
          title: "8. New Trends",
          content: [
            "Model merging: Combining models with SLERP, DARE, and TIES via mergekit.",
            "Multimodal: Processing text, images, and audio with unified embeddings.",
            "Interpretability: Mechanistic insights with SAEs and abliteration.",
            "Test-time compute: Scaling reasoning budget with MCTS and PRMs."
          ],
          resources: [
            { title: "Merge LLMs with mergekit", url: "https://mlabonne.github.io/blog/posts/2024-01-08_Merge_LLMs_with_mergekit.html" },
            { title: "Smol Vision multimodal notebooks", url: "https://github.com/merveenoyan/smol-vision" },
            { title: "Large Multimodal Models overview", url: "https://huyenchip.com/2023/10/10/multimodal.html" },
            { title: "Scaling test-time compute experiments", url: "https://huggingface.co/spaces/HuggingFaceH4/blogpost-scaling-test-time-compute" }
          ]
        }
      ]
    },
    {
      id: "engineer",
      title: "The LLM Engineer",
      icon: "Wrench",
      description: "Focuses on learning how to build LLM-powered applications that can be used in production.",
      image: "/img/roadmap_engineer.png",
      subsections: [
        {
          id: "running",
          title: "1. Running LLMs",
          content: [
            "APIs: OpenAI, Anthropic, Google (private) vs. OpenRouter, Together AI (open).",
            "Local: LM Studio, Ollama, and llama.cpp for privacy and control.",
            "Prompting: Zero-shot, few-shot, CoT, and ReAct strategies.",
            "Structured: Guiding generation with Outlines and JSON schemas."
          ],
          resources: [
            { title: "Run an LLM locally with LM Studio", url: "https://www.kdnuggets.com/run-an-llm-locally-with-lm-studio" },
            { title: "Prompt engineering guide", url: "https://www.promptingguide.ai/" },
            { title: "Outlines - Quickstart", url: "https://dottxt-ai.github.io/outlines/latest/quickstart/" }
          ]
        },
        {
          id: "storage",
          title: "2. Building a Vector Storage",
          content: [
            "Ingestion: Handling PDF, JSON, HTML, and Markdown formats.",
            "Splitting: Semantic chunking and recursive text splitting.",
            "Embeddings: Task-specific models and the MTEB leaderboard.",
            "Databases: Efficient retrieval with Chroma, Pinecone, Milvus, and FAISS."
          ],
          resources: [
            { title: "LangChain Text Splitters", url: "https://python.langchain.com/docs/how_to/#text-splitters" },
            { title: "Sentence Transformers library", url: "https://www.sbert.net/" },
            { title: "MTEB Leaderboard", url: "https://huggingface.co/spaces/mteb/leaderboard" },
            { title: "Top 7 Vector Databases", url: "https://www.datacamp.com/blog/the-top-5-vector-databases" }
          ]
        },
        {
          id: "rag",
          title: "3. Retrieval Augmented Generation (RAG)",
          content: [
            "Orchestrators: LangChain, LlamaIndex, and the MCP protocol.",
            "Retrievers: Query rewriting, hybrid retrieval, and multi-vector methods.",
            "Memory: Buffer management with summarization and vector stores.",
            "Evaluation: Ragas and DeepEval for faithfulness and relevancy."
          ],
          resources: [
            { title: "LlamaIndex Concepts", url: "https://docs.llamaindex.ai/en/stable/getting_started/concepts.html" },
            { title: "Model Context Protocol (MCP)", url: "https://modelcontextprotocol.io/introduction" },
            { title: "LangChain Q&A with RAG", url: "https://python.langchain.com/docs/tutorials/rag/" },
            { title: "RAG Evaluation Metrics", url: "https://docs.ragas.io/en/stable/concepts/metrics/index.html" }
          ]
        },
        {
          id: "advanced-rag",
          title: "4. Advanced RAG",
          content: [
            "Query construction: Translating instructions into SQL or Cypher.",
            "Tools: Agents selecting Google, Wikipedia, or Python interpreters.",
            "Post-processing: Re-ranking, RAG-fusion, and classification.",
            "Programming: DSPy for programmatic prompt and weight optimization."
          ],
          resources: [
            { title: "LangChain Query Construction", url: "https://blog.langchain.dev/query-construction/" },
            { title: "LangChain SQL Tutorial", url: "https://python.langchain.com/docs/tutorials/sql_qa/" },
            { title: "LLM Powered Autonomous Agents", url: "https://lilianweng.github.io/posts/2023-06-23-agent/" },
            { title: "DSPy in 8 Steps", url: "https://dspy-docs.vercel.app/docs/building-blocks/solving_your_task" }
          ]
        },
        {
          id: "agents",
          title: "5. Agents",
          content: [
            "Fundamentals: Thoughts, Action, and Observation loop.",
            "Protocols: MCP for tool connection and A2A for interoperability.",
            "Frameworks: LangGraph for workflows, CrewAI for multi-agent systems.",
            "Vendor SDKs: OpenAI, Google ADK, and Claude Agent SDK."
          ],
          resources: [
            { title: "Hugging Face Agents Course", url: "https://huggingface.co/learn/agents-course/unit0/introduction" },
            { title: "LangGraph Overview", url: "https://langchain-ai.github.io/langgraph/concepts/why-langgraph/" },
            { title: "LlamaIndex Agents", url: "https://docs.llamaindex.ai/en/stable/use_cases/agents/" }
          ]
        },
        {
          id: "inference",
          title: "6. Inference Optimization",
          content: [
            "Architectural: Flash Attention and KV cache optimizations.",
            "Decoding: Speculative decoding and EAGLE-3 for speedups.",
            "Throughput: Batching and Grouped-Query Attention (GQA)."
          ],
          resources: [
            { title: "GPU Inference by Hugging Face", url: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one" },
            { title: "Optimizing LLMs for Speed", url: "https://huggingface.co/docs/transformers/main/en/llm_tutorial_optimization" },
            { title: "EAGLE-3 Speculative Decoding", url: "https://arxiv.org/abs/2503.01840?utm_source=chatgpt.com" }
          ]
        },
        {
          id: "deployment",
          title: "7. Deploying LLMs",
          content: [
            "Demo: Gradio, Streamlit, and Hugging Face Spaces.",
            "Server: TGI, vLLM, and SkyPilot for cloud scaling.",
            "Edge: MLC LLM and mnn-llm for browsers and mobile devices.",
            "Privacy: Local servers like Ollama and LM Studio."
          ],
          resources: [
            { title: "Streamlit basic LLM app", url: "https://docs.streamlit.io/knowledge-base/tutorials/build-conversational-apps" },
            { title: "HF LLM Inference Container", url: "https://huggingface.co/blog/sagemaker-huggingface-llm" },
            { title: "Optimizing latency comparison", url: "https://hamel.dev/notes/llm/inference/03_inference.html" }
          ]
        },
        {
          id: "security",
          title: "8. Securing LLMs",
          content: [
            "Hacking: Prompt injection, leaking, and jailbreaking.",
            "Backdoors: Data poisoning and secret triggers.",
            "Defense: Red teaming, garak testing, and langfuse observation."
          ],
          resources: [
            { title: "OWASP LLM Top 10", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
            { title: "Prompt Injection Primer", url: "https://github.com/jthack/PIPE" },
            { title: "LLM Security Resources", url: "https://llmsecurity.net/" },
            { title: "Red teaming LLMs guide", url: "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/red-teaming" }
          ]
        }
      ]
    }
  ]
};
