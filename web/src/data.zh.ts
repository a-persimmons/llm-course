import type { NotebookCategory, Section } from './data';

export const courseDataZh: { hero: { title: string; banner: string; description: string; social: { name: string; url: string }[] }; notebooks: NotebookCategory[]; sections: Section[] } = {
  hero: {
    title: "LLM 课程",
    banner: "/img/banner.png",
    description: "LLM 课程分为三部分：基础、科学家和工程师。",
    social: [
      { name: "X", url: "https://twitter.com/maximelabonne" },
      { name: "Hugging Face", url: "https://huggingface.co/mlabonne" },
      { name: "博客", url: "https://mlabonne.github.io/blog" },
      { name: "手册", url: "https://packt.link/a/9781836200079" }
    ]
  },
  notebooks: [
    {
      title: "工具",
      items: [
        { name: "LLM AutoEval", description: "使用 RunPod 自动评估你的 LLM。", notebookUrl: "https://colab.research.google.com/drive/1Igs3WZuXAIv9X0vwqiE90QlEPys8e8Oa?usp=sharing" },
        { name: "LazyMergekit", description: "一键使用 MergeKit 轻松合并模型。", notebookUrl: "https://colab.research.google.com/drive/1obulZ1ROXHjYLn6PPZJwRR6GzgQogxxb?usp=sharing" },
        { name: "LazyAxolotl", description: "在云端一键用 Axolotl 微调模型。", notebookUrl: "https://colab.research.google.com/drive/1TsDKNo2riwVmU55gjuBgB1AXVtRRfRHW?usp=sharing" },
        { name: "AutoQuant", description: "一键量化到 GGUF、GPTQ、EXL2、AWQ、HQQ。", notebookUrl: "https://colab.research.google.com/drive/1b6nqC7UZVt8bx4MksX7s656GXPM-eWw4?usp=sharing" },
        { name: "模型家族树", description: "可视化合并模型之间的家族关系。", notebookUrl: "https://colab.research.google.com/drive/1s2eQlolcI1VGgDhqWIANfkfKvcKrMyNr?usp=sharing" },
        { name: "ZeroSpace", description: "自动创建 Gradio 聊天界面并使用免费 ZeroGPU。", notebookUrl: "https://colab.research.google.com/drive/1LcVUW5wsJTO2NGmozjji5CkC--646LgC" },
        { name: "AutoAbliteration", description: "基于自定义数据集自动进行 abliteration。", notebookUrl: "https://colab.research.google.com/drive/1RmLv-pCMBBsQGXQIM8yF-OdCNyoylUR1?usp=sharing" },
        { name: "AutoDedup", description: "使用 Rensa 自动进行数据去重。", notebookUrl: "https://colab.research.google.com/drive/1o1nzwXWAa8kdkEJljbJFW1VuI-3VZLUn?usp=sharing" }
      ]
    },
    {
      title: "微调",
      items: [
        { name: "用 Unsloth 微调 Llama 3.1", description: "在 Google Colab 中进行超高效监督微调。", articleUrl: "https://mlabonne.github.io/blog/posts/2024-07-29_Finetune_Llama31.html", notebookUrl: "https://colab.research.google.com/drive/164cg_O7SV7G8kZr_JXqLd6VC7pd86-1Z?usp=sharing" },
        { name: "用 ORPO 微调 Llama 3", description: "使用 ORPO 以更低成本、更快速度单阶段微调。", articleUrl: "https://mlabonne.github.io/blog/posts/2024-04-19_Fine_tune_Llama_3_with_ORPO.html", notebookUrl: "https://colab.research.google.com/drive/1eHNWg9gnaXErdAa8_mcvjMupbSS6rDvi" },
        { name: "用 DPO 微调 Mistral-7b", description: "通过 DPO 提升监督微调模型性能。", articleUrl: "https://mlabonne.github.io/blog/posts/Fine_tune_Mistral_7b_with_DPO.html", notebookUrl: "https://colab.research.google.com/drive/15iFBr1xWgztXvhrj5I9fBv20c7CFOPBE?usp=sharing" },
        { name: "用 QLoRA 微调 Mistral-7b", description: "在免费层 Colab 中使用 TRL 进行监督微调。", notebookUrl: "https://colab.research.google.com/drive/1o_w0KastmEJNVwT5GoqMCciH-18ca5WS?usp=sharing" },
        { name: "使用 Axolotl 微调 CodeLlama", description: "端到端上手当前主流微调工具。", articleUrl: "https://mlabonne.github.io/blog/posts/A_Beginners_Guide_to_LLM_Finetuning.html", notebookUrl: "https://colab.research.google.com/drive/1Xu0BrCB7IShwSWKVcfAfhehwjDrDMH5m?usp=sharing" },
        { name: "用 QLoRA 微调 Llama 2", description: "在 Google Colab 中分步骤完成监督微调。", articleUrl: "https://mlabonne.github.io/blog/posts/Fine_Tune_Your_Own_Llama_2_Model_in_a_Colab_Notebook.html", notebookUrl: "https://colab.research.google.com/drive/1PEQyJO1-f6j0S_XJ8DV50NkpzasXkrzd?usp=sharing" }
      ]
    },
    {
      title: "量化",
      items: [
        { name: "量化入门", description: "使用 8-bit 量化优化大语言模型。", articleUrl: "https://mlabonne.github.io/blog/posts/Introduction_to_Weight_Quantization.html", notebookUrl: "https://colab.research.google.com/drive/1DPr4mUQ92Cc-xf4GgAaB6dFcFnWIvqYi?usp=sharing" },
        { name: "使用 GPTQ 进行 4-bit 量化", description: "量化开源 LLM 以在消费级硬件上运行。", articleUrl: "https://mlabonne.github.io/blog/4bit_quantization/", notebookUrl: "https://colab.research.google.com/drive/1lSvVDaRgqQp_mWK_jC9gydz6_-y6Aq4A?usp=sharing" },
        { name: "GGUF 与 llama.cpp 量化", description: "量化 Llama 2 并上传 GGUF 到 HF Hub。", articleUrl: "https://mlabonne.github.io/blog/posts/Quantize_Llama_2_models_using_ggml.html", notebookUrl: "https://colab.research.google.com/drive/1pL8k7m04mgE5jo2NrjGi8atB0j_37aDD?usp=sharing" },
        { name: "ExLlamaV2：高性能运行 LLM", description: "量化并运行 EXL2 模型并上传到 HF Hub。", articleUrl: "https://mlabonne.github.io/blog/posts/ExLlamaV2_The_Fastest_Library_to_Run%C2%A0LLMs.html", notebookUrl: "https://colab.research.google.com/drive/1yrq4XBlxiA0fALtMoT2dwiACVc77PHou?usp=sharing" }
      ]
    },
    {
      title: "其他",
      items: [
        { name: "用 MergeKit 合并 LLM", description: "无需 GPU，轻松创建你自己的模型。", articleUrl: "https://mlabonne.github.io/blog/posts/2024-01-08_Merge_LLMs_with_mergekit%20copy.html", notebookUrl: "https://colab.research.google.com/drive/1_JS7JKJAQozD48-LhYdegcuuZ2ddgXfr?usp=sharing" },
        { name: "用 MergeKit 创建 MoE", description: "把多个专家合并为一个 frankenMoE。", articleUrl: "https://mlabonne.github.io/blog/posts/2024-03-28_Create_Mixture_of_Experts_with_MergeKit.html", notebookUrl: "https://colab.research.google.com/drive/1obulZ1ROXHjYLn6PPZJwRR6GzgQogxxb?usp=sharing" },
        { name: "用 abliteration 去审查", description: "无需重训即可调整模型行为。", articleUrl: "https://mlabonne.github.io/blog/posts/2024-06-04_Uncensor_any_LLM_with_abliteration.html", notebookUrl: "https://colab.research.google.com/drive/1VYm3hOcvCpbGiqKZb141gJwjdmmCcVpR?usp=sharing" },
        { name: "用知识图谱增强 ChatGPT", description: "通过知识图谱增强回答效果。", articleUrl: "https://mlabonne.github.io/blog/posts/Article_Improve_ChatGPT_with_Knowledge_Graphs.html", notebookUrl: "https://colab.research.google.com/drive/1mwhOSw9Y9bgEaIFKT4CLi0n18pXRM4cj?usp=sharing" },
        { name: "LLM 解码策略", description: "从 Beam Search 到 Nucleus Sampling 的生成策略指南。", articleUrl: "https://mlabonne.github.io/blog/posts/2022-06-07-Decoding_strategies.html", notebookUrl: "https://colab.research.google.com/drive/19CJlOS5lI29g-B3dziNn93Enez1yiHk2?usp=sharing" }
      ]
    }
  ],
  sections: [
    {
      id: "fundamentals",
      title: "LLM 基础",
      icon: "Puzzle",
      description: "本模块介绍数学、Python 和神经网络等核心基础知识，可按需学习。",
      image: "/img/roadmap_fundamentals.png",
      subsections: [
        {
          id: "math",
          title: "1. 机器学习数学基础",
          content: [
            "线性代数：理解向量、矩阵、行列式、特征值与特征向量、向量空间与线性变换。",
            "微积分：掌握连续函数优化、导数、积分、极限与梯度等概念。",
            "概率统计：掌握随机变量、分布、期望、方差、假设检验与贝叶斯推断。"
          ],
          resources: [
            { title: "3Blue1Brown - 线性代数的本质", url: "https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" },
            { title: "StatQuest - 统计学基础", url: "https://www.youtube.com/watch?v=qBigTkBLU6g&list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9" },
            { title: "Seeing Theory", url: "https://seeing-theory.brown.edu/" },
            { title: "Immersive Linear Algebra", url: "https://immersivemath.com/ila/learnmore.html" },
            { title: "Khan Academy - 线性代数", url: "https://www.khanacademy.org/math/linear-algebra" },
            { title: "Khan Academy - 微积分", url: "https://www.khanacademy.org/math/calculus-1" },
            { title: "Khan Academy - 概率统计", url: "https://www.khanacademy.org/math/statistics-probability" }
          ]
        },
        {
          id: "python",
          title: "2. 机器学习 Python 基础",
          content: [
            "Python 基础：语法、数据类型、异常处理与面向对象编程。",
            "数据科学库：NumPy、Pandas、Matplotlib 与 Seaborn。",
            "数据预处理：缩放、归一化、缺失值与异常值处理。",
            "机器学习库：Scikit-learn、回归/分类/聚类及 PCA、t-SNE。"
          ],
          resources: [
            { title: "Real Python", url: "https://realpython.com/" },
            { title: "freeCodeCamp - 学 Python", url: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
            { title: "Python Data Science Handbook", url: "https://jakevdp.github.io/PythonDataScienceHandbook/" },
            { title: "freeCodeCamp - 面向所有人的机器学习", url: "https://youtu.be/i_LwzRVP7bg" },
            { title: "Udacity - 机器学习入门", url: "https://www.udacity.com/course/intro-to-machine-learning--ud120" }
          ]
        },
        {
          id: "neural-networks",
          title: "3. 神经网络",
          content: [
            "基础：层、权重、偏置与激活函数（sigmoid、tanh、ReLU）。",
            "训练优化：反向传播、损失函数（MSE、交叉熵）与优化器（SGD、RMSprop、Adam）。",
            "过拟合：dropout、L1/L2、早停与数据增强等正则化方法。",
            "实践：使用 PyTorch 实现多层感知机（MLP）。"
          ],
          resources: [
            { title: "3Blue1Brown - 什么是神经网络？", url: "https://www.youtube.com/watch?v=aircAruvnKk" },
            { title: "freeCodeCamp - 深度学习速成", url: "https://www.youtube.com/watch?v=VyWAvY2CF9c" },
            { title: "Fast.ai - 实战深度学习", url: "https://course.fast.ai/" },
            { title: "Patrick Loeber - PyTorch 教程", url: "https://www.youtube.com/playlist?list=PLqnslRFeH2UrcDBWF5mfPGpqQDSta6VK4" }
          ]
        },
        {
          id: "nlp",
          title: "4. 自然语言处理（NLP）",
          content: [
            "文本预处理：分词、词干化、词形还原、停用词处理。",
            "特征提取：BoW、TF-IDF 与 n-gram。",
            "词向量：Word2Vec、GloVe 与 FastText。",
            "RNN：LSTM/GRU 在序列任务与长期依赖中的应用。"
          ],
          resources: [
            { title: "Lena Voita - 词向量课程", url: "https://lena-voita.github.io/nlp_course/word_embeddings.html" },
            { title: "RealPython - spaCy NLP 指南", url: "https://realpython.com/natural-language-processing-spacy-python/" },
            { title: "Kaggle - NLP Guide", url: "https://www.kaggle.com/learn-guide/natural-language-processing" },
            { title: "Jay Alammar - 图解 Word2Vec", url: "https://jalammar.github.io/illustrated-word2vec/" },
            { title: "Jake Tae - 从零实现 PyTorch RNN", url: "https://jaketae.github.io/study/pytorch-rnn/" },
            { title: "colah - 理解 LSTM 网络", url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/" }
          ]
        }
      ]
    },
    {
      id: "scientist",
      title: "LLM 科学家",
      icon: "Microscope",
      description: "本模块聚焦使用前沿技术构建高质量 LLM。",
      image: "/img/roadmap_scientist.png",
      subsections: [
        {
          id: "architecture",
          title: "1. LLM 架构",
          content: [
            "架构概览：从编码器-解码器到仅解码器 Transformer 的演进。",
            "分词：文本数值化表示及其对性能的影响。",
            "注意力机制：自注意力及其长程依赖建模能力。",
            "采样策略：贪心/束搜索与概率采样之间的取舍。"
          ],
          resources: [
            { title: "可视化 Transformer 入门", url: "https://www.youtube.com/watch?v=wjZofJX0v4M" },
            { title: "LLM 可视化", url: "https://bbycroft.net/llm" },
            { title: "Andrej Karpathy 的 nanoGPT", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY" },
            { title: "Lilian Weng - Attention 综述", url: "https://lilianweng.github.io/posts/2018-06-24-attention/" },
            { title: "LLM 解码策略", url: "https://mlabonne.github.io/blog/posts/2023-06-07-Decoding_strategies.html" }
          ]
        },
        {
          id: "pretraining",
          title: "2. 预训练模型",
          content: [
            "数据准备：清洗、去重、过滤与高质量语料构建。",
            "分布式训练：数据并行、流水并行与张量并行组合。",
            "训练优化：自适应学习率、AdamW/Lion、混合精度。",
            "监控：跨 GPU 集群的性能分析与指标追踪。"
          ],
          resources: [
            { title: "FineWeb（Hugging Face）", url: "https://huggingface.co/spaces/HuggingFaceFW/blogpost-fineweb-v1" },
            { title: "RedPajama v2（Together AI）", url: "https://www.together.ai/blog/redpajama-data-v2" },
            { title: "nanotron（Hugging Face）", url: "https://github.com/huggingface/nanotron" },
            { title: "分布式训练综述", url: "https://arxiv.org/abs/2407.20018" },
            { title: "OLMo 2（AI2）", url: "https://allenai.org/olmo" },
            { title: "LLM360 框架", url: "https://www.llm360.ai/" }
          ]
        },
        {
          id: "posttraining",
          title: "3. 后训练数据集",
          content: [
            "存储与模板：ShareGPT 等格式映射到 ChatML/Alpaca 模板。",
            "合成数据：利用前沿模型生成指令-回答样本。",
            "数据增强：可验证输出、拒绝采样与思维链增强。",
            "质量过滤：MinHash 去重、去污染与评审模型质检。"
          ],
          resources: [
            { title: "Argilla 合成数据生成器", url: "https://huggingface.co/spaces/argilla/synthetic-data-generator" },
            { title: "LLM Datasets（Maxime Labonne）", url: "https://github.com/mlabonne/llm-datasets" },
            { title: "NeMo-Curator（NVIDIA）", url: "https://github.com/NVIDIA/NeMo-Curator" },
            { title: "Distilabel（Argilla）", url: "https://distilabel.argilla.io/dev/sections/pipeline_samples/" },
            { title: "Semhash 去重库", url: "https://github.com/MinishLab/semhash" }
          ]
        },
        {
          id: "sft",
          title: "4. 监督微调（SFT）",
          content: [
            "技术路径：全参数微调与 LoRA/QLoRA 等高效微调。",
            "训练框架：TRL、Unsloth、Axolotl。",
            "关键参数：学习率、batch、weight decay、LoRA 参数。",
            "多卡扩展：DeepSpeed ZeRO 与 FSDP。"
          ],
          resources: [
            { title: "用 Unsloth 微调 Llama 3.1", url: "https://huggingface.co/blog/mlabonne/sft-llama3" },
            { title: "Axolotl 文档", url: "https://axolotl-ai-cloud.github.io/axolotl/" },
            { title: "Mastering LLMs", url: "https://parlance-labs.com/education/" },
            { title: "LoRA 参数洞察", url: "https://lightning.ai/pages/community/lora-insights/" }
          ]
        },
        {
          id: "preference",
          title: "5. 偏好对齐",
          content: [
            "算法：DPO、GRPO、PPO。",
            "拒绝采样：构建 on-policy 偏好数据。",
            "奖励模型：学习人类偏好评分信号。",
            "强化学习：通过奖励优化推理质量。"
          ],
          resources: [
            { title: "Hugging Face - RLHF 图解", url: "https://huggingface.co/blog/rlhf" },
            { title: "RLHF 与替代方案", url: "https://magazine.sebastianraschka.com/p/llm-training-rlhf-and-its-alternatives" },
            { title: "偏好微调方法对比", url: "https://huggingface.co/blog/pref-tuning" },
            { title: "GRPO 实战教程", url: "https://huggingface.co/learn/llm-course/en/chapter12/5" }
          ]
        },
        {
          id: "evaluation",
          title: "6. 评估",
          content: [
            "自动基准：如 MMLU 等任务型指标。",
            "人工评估：主观体验评测与 Arena 投票。",
            "模型评估：Judge/Reward 模型自动打分。",
            "反馈闭环：基于错误模式定位弱点并回流训练。"
          ],
          resources: [
            { title: "LLM 评估指南", url: "https://huggingface.co/spaces/OpenEvals/evaluation-guidebook" },
            { title: "Open LLM Leaderboard", url: "https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard" },
            { title: "LM Evaluation Harness", url: "https://github.com/EleutherAI/lm-evaluation-harness" },
            { title: "Chatbot Arena（LMSYS）", url: "https://lmarena.ai/" }
          ]
        },
        {
          id: "quantization",
          title: "7. 量化",
          content: [
            "精度体系：FP32、FP16、INT8 与 4-bit。",
            "工具链：llama.cpp 与 GGUF。",
            "高级方法：GPTQ、AWQ、EXL2。",
            "异常值处理：SmoothQuant 与 ZeroQuant。"
          ],
          resources: [
            { title: "量化入门", url: "https://mlabonne.github.io/blog/posts/Introduction_to_Weight_Quantization.html" },
            { title: "llama.cpp 量化教程", url: "https://mlabonne.github.io/blog/posts/Quantize_Llama_2_models_using_ggml.html" },
            { title: "GPTQ 4-bit 量化", url: "https://mlabonne.github.io/blog/posts/4_bit_Quantization_with_GPTQ.html" },
            { title: "AWQ 原理概览", url: "https://medium.com/friendliai/understanding-activation-aware-weight-quantization-awq-boosting-inference-serving-efficiency-in-10bb0faf63a8" }
          ]
        },
        {
          id: "trends",
          title: "8. 新趋势",
          content: [
            "模型融合：使用 mergekit 的 SLERP/DARE/TIES。",
            "多模态：统一嵌入空间处理文本、图像和音频。",
            "可解释性：SAE 与 abliteration 等机制解释方法。",
            "测试时计算扩展：通过更大推理预算提升复杂任务表现。"
          ],
          resources: [
            { title: "MergeKit 融合教程", url: "https://mlabonne.github.io/blog/posts/2024-01-08_Merge_LLMs_with_mergekit.html" },
            { title: "Smol Vision 多模态项目", url: "https://github.com/merveenoyan/smol-vision" },
            { title: "多模态大模型综述", url: "https://huyenchip.com/2023/10/10/multimodal.html" },
            { title: "测试时计算扩展示例", url: "https://huggingface.co/spaces/HuggingFaceH4/blogpost-scaling-test-time-compute" }
          ]
        }
      ]
    },
    {
      id: "engineer",
      title: "LLM 工程师",
      icon: "Wrench",
      description: "本模块聚焦构建并部署可用于生产环境的 LLM 应用。",
      image: "/img/roadmap_engineer.png",
      subsections: [
        {
          id: "running",
          title: "1. 运行 LLM",
          content: [
            "API：OpenAI/Anthropic/Google 与 OpenRouter/Together AI 等。",
            "本地部署：LM Studio、Ollama、llama.cpp。",
            "提示工程：零样本、少样本、CoT、ReAct。",
            "结构化输出：通过 Outlines 或 JSON Schema 约束生成。"
          ],
          resources: [
            { title: "本地运行 LLM（LM Studio）", url: "https://www.kdnuggets.com/run-an-llm-locally-with-lm-studio" },
            { title: "提示工程指南", url: "https://www.promptingguide.ai/" },
            { title: "Outlines 快速开始", url: "https://dottxt-ai.github.io/outlines/latest/quickstart/" }
          ]
        },
        {
          id: "storage",
          title: "2. 构建向量存储",
          content: [
            "数据摄取：支持 PDF、JSON、HTML、Markdown。",
            "文本切分：语义切分与递归切分。",
            "嵌入模型：任务匹配模型与 MTEB 排行。",
            "向量库：Chroma、Pinecone、Milvus、FAISS。"
          ],
          resources: [
            { title: "LangChain 文本切分器", url: "https://python.langchain.com/docs/how_to/#text-splitters" },
            { title: "Sentence Transformers", url: "https://www.sbert.net/" },
            { title: "MTEB 排行榜", url: "https://huggingface.co/spaces/mteb/leaderboard" },
            { title: "向量数据库对比", url: "https://www.datacamp.com/blog/the-top-5-vector-databases" }
          ]
        },
        {
          id: "rag",
          title: "3. 检索增强生成（RAG）",
          content: [
            "编排框架：LangChain、LlamaIndex 与 MCP。",
            "检索器：查询重写、混合检索、多向量检索。",
            "记忆：上下文缓存、摘要与向量记忆。",
            "评估：使用 Ragas / DeepEval 衡量相关性与忠实度。"
          ],
          resources: [
            { title: "LlamaIndex 核心概念", url: "https://docs.llamaindex.ai/en/stable/getting_started/concepts.html" },
            { title: "Model Context Protocol（MCP）", url: "https://modelcontextprotocol.io/introduction" },
            { title: "LangChain RAG 教程", url: "https://python.langchain.com/docs/tutorials/rag/" },
            { title: "RAG 评估指标", url: "https://docs.ragas.io/en/stable/concepts/metrics/index.html" }
          ]
        },
        {
          id: "advanced-rag",
          title: "4. 高级 RAG",
          content: [
            "查询构建：将用户意图转换为 SQL/Cypher。",
            "工具调用：自动选择搜索、知识库、解释器等工具。",
            "后处理：重排、RAG-fusion、分类过滤。",
            "程序化优化：使用 DSPy 自动优化提示与权重。"
          ],
          resources: [
            { title: "LangChain Query Construction", url: "https://blog.langchain.dev/query-construction/" },
            { title: "LangChain SQL 教程", url: "https://python.langchain.com/docs/tutorials/sql_qa/" },
            { title: "LLM 自主 Agent 综述", url: "https://lilianweng.github.io/posts/2023-06-23-agent/" },
            { title: "DSPy 八步上手", url: "https://dspy-docs.vercel.app/docs/building-blocks/solving_your_task" }
          ]
        },
        {
          id: "agents",
          title: "5. 智能体（Agents）",
          content: [
            "核心循环：思考（Thought）-行动（Action）-观察（Observation）。",
            "协议：MCP 与 A2A。",
            "框架：LangGraph、CrewAI 等。",
            "厂商 SDK：OpenAI、Google ADK、Claude Agent SDK。"
          ],
          resources: [
            { title: "Hugging Face Agents 课程", url: "https://huggingface.co/learn/agents-course/unit0/introduction" },
            { title: "LangGraph 概览", url: "https://langchain-ai.github.io/langgraph/concepts/why-langgraph/" },
            { title: "LlamaIndex Agents", url: "https://docs.llamaindex.ai/en/stable/use_cases/agents/" }
          ]
        },
        {
          id: "inference",
          title: "6. 推理优化",
          content: [
            "架构优化：Flash Attention 与 KV Cache。",
            "解码优化：Speculative Decoding 与 EAGLE-3。",
            "吞吐优化：批处理与 GQA。"
          ],
          resources: [
            { title: "Hugging Face GPU 推理优化", url: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one" },
            { title: "LLM 速度与内存优化", url: "https://huggingface.co/docs/transformers/main/en/llm_tutorial_optimization" },
            { title: "EAGLE-3 论文", url: "https://arxiv.org/abs/2503.01840?utm_source=chatgpt.com" }
          ]
        },
        {
          id: "deployment",
          title: "7. 部署 LLM",
          content: [
            "演示部署：Gradio、Streamlit、HF Spaces。",
            "服务部署：TGI、vLLM、SkyPilot。",
            "端侧部署：MLC LLM、mnn-llm。",
            "隐私场景：Ollama、LM Studio 本地服务。"
          ],
          resources: [
            { title: "Streamlit 构建基础 LLM 应用", url: "https://docs.streamlit.io/knowledge-base/tutorials/build-conversational-apps" },
            { title: "HF LLM Inference Container", url: "https://huggingface.co/blog/sagemaker-huggingface-llm" },
            { title: "推理延迟优化对比", url: "https://hamel.dev/notes/llm/inference/03_inference.html" }
          ]
        },
        {
          id: "security",
          title: "8. LLM 安全",
          content: [
            "攻击方式：提示注入、提示泄露、越狱。",
            "后门风险：数据投毒与触发器后门。",
            "防御手段：红队测试、garak 检测、线上观测。"
          ],
          resources: [
            { title: "OWASP LLM Top 10", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
            { title: "Prompt Injection Primer", url: "https://github.com/jthack/PIPE" },
            { title: "LLM Security 资源集合", url: "https://llmsecurity.net/" },
            { title: "Microsoft 红队指南", url: "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/red-teaming" }
          ]
        }
      ]
    }
  ]
};
