<?php

test('that true is true', function () {
    expect(true)->toBeTrue();
    expect(false)->toBeFalse();
    expect(null)->toBeNull();
    expect('string')->toBeString();
});
