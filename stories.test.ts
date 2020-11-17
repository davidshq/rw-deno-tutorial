import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import { mapStory } from './stories.ts';

// To test run deno test for all tests or deno test stories.test.js for just this test

Deno.test('maps to a smaller story with formatted date', () => {
    const stories = [
        {
            id: '1',
            title: 'title1',
            url: 'url1',
            created_at_i: 1476198038,
        },
    ];

    const expectedStories = [
        {
            title: 'title1',
            url: 'url1',
            createdAt: '2016-10-11',
        },
    ];

    assertEquals(stories.map(mapStory), expectedStories);
});