export interface DynamicArticle {
  title: string;
  summary: string;
  responses: string;
  url: string;
  date: string;
}

export interface ProjectStats {
  playStoreDownloads?: string;
  playStoreRating?: string;
  appStoreDownloads?: string;
  appStoreRating?: string;
}

export interface DynamicMetrics {
  stackoverflowRep: string;
  stackoverflowReach: string;
  pubDownloads: string;
  pubPackages: string;
  mediumFollowers: string;
  articles: DynamicArticle[];
  projects: Record<string, ProjectStats>;
}

export async function getDynamicMetrics(): Promise<DynamicMetrics> {
  const defaultMetrics: DynamicMetrics = {
    stackoverflowRep: "6.2k",
    stackoverflowReach: "10.4M",
    pubDownloads: "35k+",
    pubPackages: "19",
    mediumFollowers: "2,000+",
    articles: [
      {
        title: "8 Tips to Secure Your Flutter Mobile Apps",
        summary: "Strategic measures for fortifying production Flutter applications against external threats.",
        responses: "4",
        url: "https://shirsh94.medium.com/8-tips-to-secure-your-flutter-mobile-apps-cc74deb37e1b",
        date: "2024"
      },
      {
        title: "Flutter will use an impeller instead of Skia",
        summary: "An investigation into the next-generation rendering engine and its impact on performance.",
        responses: "5",
        url: "https://shirsh94.medium.com/flutter-will-use-an-impeller-instead-of-skia-e5530d43b918",
        date: "2024"
      },
      {
        title: "Solid Principles in a Flutter",
        summary: "Applying clean architectural standards to the Dart ecosystem for modular maintainability.",
        responses: "3",
        url: "https://shirsh94.medium.com/solid-principles-in-a-flutter-32eaf7218476",
        date: "2024"
      },
      {
        title: "Top 10 Flutter Apps You Must Make as a Beginner",
        summary: "A curated curriculum of technical milestones for mastering the cross-platform paradigm.",
        responses: "9",
        url: "https://shirsh94.medium.com/top-10-flutter-apps-you-must-make-as-a-beginner-351ba913133f",
        date: "2024"
      }
    ],
    projects: {
      "MyJio": { playStoreDownloads: "500M+", playStoreRating: "4.3★", appStoreDownloads: "1M+", appStoreRating: "4.6★" },
      "JCP On The Go": { playStoreDownloads: "10k+", playStoreRating: "4.0★", appStoreDownloads: "5k+", appStoreRating: "4.5★" },
      "LEAD Student & Parent App": { playStoreDownloads: "1M+", playStoreRating: "4.2★", appStoreDownloads: "100k+", appStoreRating: "4.4★" },
      "Whoppah": { playStoreDownloads: "100k+", playStoreRating: "4.4★", appStoreDownloads: "50k+", appStoreRating: "4.7★" }
    }
  };

  try {
    // 1. Fetch StackOverflow Data
    const soResponse = await fetch(
      "https://api.stackexchange.com/2.3/users/13098417?site=stackoverflow",
      { next: { revalidate: 86400 } }
    );

    if (soResponse.ok) {
      const soData = await soResponse.json();
      if (soData.items && soData.items.length > 0) {
        const user = soData.items[0];
        defaultMetrics.stackoverflowRep = formatNumber(user.reputation);
      }
    }

    // 2. Fetch Medium RSS
    const mediumResponse = await fetch(
      "https://medium.com/feed/@shirsh94",
      { next: { revalidate: 86400 } }
    );

    const staticArticleData: Record<string, { responses: string, summary: string, url: string }> = {
      "8 Tips to Secure Your Flutter Mobile Apps": {
        responses: "4",
        summary: "Strategic measures for fortifying production Flutter applications against external threats.",
        url: "https://shirsh94.medium.com/8-tips-to-secure-your-flutter-mobile-apps-cc74deb37e1b"
      },
      "Flutter will use an impeller instead of Skia": {
        responses: "5",
        summary: "An investigation into the next-generation rendering engine and its impact on performance.",
        url: "https://shirsh94.medium.com/flutter-will-use-an-impeller-instead-of-skia-e5530d43b918"
      },
      "Solid Principles in a Flutter": {
        responses: "3",
        summary: "Applying clean architectural standards to the Dart ecosystem for modular maintainability.",
        url: "https://shirsh94.medium.com/solid-principles-in-a-flutter-32eaf7218476"
      },
      "Top 10 Flutter Apps You Must Make as a Beginner": {
        responses: "9",
        summary: "A curated curriculum of technical milestones for mastering the cross-platform paradigm.",
        url: "https://shirsh94.medium.com/top-10-flutter-apps-you-must-make-as-a-beginner-351ba913133f"
      },
      "The Flutter Confetti Package That Actually Does Everything": {
        responses: "1",
        summary: "A comprehensive review of advanced UI animation techniques in Flutter.",
        url: "https://shirsh94.medium.com/the-flutter-confetti-package-that-actually-does-everything-0d94c2da140e"
      },
      "Prompting is dead. So we’re loop engineering now??": {
        responses: "2",
        summary: "Exploring the evolution of prompt engineering into structured loop systems.",
        url: "https://shirsh94.medium.com/prompting-is-dead-so-were-loop-engineering-now-ac0d6a20365b"
      },
      "Widget Tree vs Element Tree vs Render Tree in Flutter": {
        responses: "6",
        summary: "A deep dive into the three trees architecture that powers Flutter rendering.",
        url: "https://shirsh94.medium.com/widget-tree-vs-element-tree-vs-render-tree-in-flutter-24071cabab8c"
      },
      "Flutter WebView: I Tried the Advanced super_webview Package, Here’s What I Found": {
        responses: "3",
        summary: "Testing high-performance webview alternatives for complex Flutter integrations.",
        url: "https://shirsh94.medium.com/flutter-webview-i-tried-the-advanced-super-webview-package-heres-what-i-found-54a0f05397c1"
      },
      "Best Flutter Speech-to-Text Package for Long Voice Recognition: speech_to_text_pro Review": {
        responses: "4",
        summary: "Analysis of robust speech-to-text solutions for long-form voice processing.",
        url: "https://shirsh94.medium.com/best-flutter-speech-to-text-package-for-long-voice-recognition-speech-to-text-pro-review-65a4338a7d06"
      }
    };

    const pinnedArticles = [
      "8 Tips to Secure Your Flutter Mobile Apps",
      "Flutter will use an impeller instead of Skia",
      "Solid Principles in a Flutter",
      "Top 10 Flutter Apps You Must Make as a Beginner"
    ];

    if (mediumResponse.ok) {
      const xml = await mediumResponse.text();
      // Extract all items from the feed
      const allItems = xml.split("<item>").slice(1);

      const feedArticles = allItems.map(item => {
        const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ||
                     item.match(/<title>(.*?)<\/title>/)?.[1] || "Untitled";
        const link = item.match(/<link>(.*?)<\/link>/)?.[1] || "#";
        const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || "";
        return { title, link, pubDate };
      });

      // Map our specific pinned articles to their dynamic data if found in feed
      defaultMetrics.articles = pinnedArticles.map(title => {
        const found = feedArticles.find(fa => fa.title === title);
        const staticData = staticArticleData[title];

        return {
          title,
          summary: staticData?.summary || "Latest technical insights from the Flutter ecosystem.",
          responses: staticData?.responses || "0",
          url: found?.link || staticData?.url || `https://shirsh94.medium.com/search?q=${encodeURIComponent(title)}`,
          date: found ? new Date(found.pubDate).getFullYear().toString() : "2024"
        };
      });
    }

    // 3. Simple Project Metric Refresher (Attempt to fetch Play Store data for MyJio as anchor)
    const playStoreResponse = await fetch(
      "https://play.google.com/store/apps/details?id=com.jio.myjio",
      { next: { revalidate: 86400 } }
    );

    if (playStoreResponse.ok) {
      const html = await playStoreResponse.text();
      const downloadsMatch = html.match(/(\d+(?:\.\d+)?[MK]\+? downloads)/i);
      if (downloadsMatch) {
        defaultMetrics.projects["MyJio"].playStoreDownloads = downloadsMatch[1].replace(" downloads", "");
      }
    }

    return defaultMetrics;
  } catch (error) {
    console.error("Failed to fetch dynamic metrics:", error);
    return defaultMetrics;
  }
}

function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "k";
  return num.toString();
}
