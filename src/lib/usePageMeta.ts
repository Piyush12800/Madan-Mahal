import { useEffect } from 'react';
import { business } from '../data/site';

/**
 * Per-route title and description. The old site had one title for every page,
 * which is the fastest way to stay invisible in local search.
 */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} — ${business.brand}`;

    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.name = 'description';
      document.head.appendChild(tag);
    }
    tag.content = description;
  }, [title, description]);
}
