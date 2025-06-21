import { useEffect } from 'react';
import {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    withSequence
} from 'react-native-reanimated';

// FadeIn animation
export const useFadeIn = (duration = 500) => {
    const opacity = useSharedValue(0);

    useEffect(() => {
        opacity.value = withTiming(1, { duration });
    }, []);

    return useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));
};

// PopIn animation
export const usePopIn = (duration = 500) => {
    const scale = useSharedValue(0.9);
    const translateY = useSharedValue(-10);
    const opacity = useSharedValue(0);

    useEffect(() => {
        scale.value = withTiming(1, { duration });
        translateY.value = withTiming(0, { duration });
        opacity.value = withTiming(1, { duration });
    }, []);

    return useAnimatedStyle(() => ({
        transform: [
            { scale: scale.value },
            { translateY: translateY.value },
        ],
        opacity: opacity.value,
    }));
};

// Glow (simulate via shadow radius pulse)
export const useGlow = () => {
    const glow = useSharedValue(0);

    useEffect(() => {
        glow.value = withRepeat(
            withSequence(
                withTiming(1, { duration: 1000 }),
                withTiming(0.5, { duration: 1000 })
            ),
            -1,
            true
        );
    }, []);

    return useAnimatedStyle(() => ({
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: glow.value * 20,
    }));
};

// Bounce animation
export const useBounce = () => {
    const translateY = useSharedValue(0);

    useEffect(() => {
        translateY.value = withRepeat(
            withSequence(
                withTiming(-10, { duration: 500 }),
                withTiming(0, { duration: 500 })
            ),
            -1,
            true
        );
    }, []);

    return useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));
};

// Scale Pulse (equivalent to .scale)
export const useScalePulse = () => {
    const scale = useSharedValue(1);

    useEffect(() => {
        scale.value = withRepeat(
            withSequence(
                withTiming(0.9, { duration: 500 }),
                withTiming(1, { duration: 500 })
            ),
            -1,
            true
        );
    }, []);

    return useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));
};

// Roll animation (rotate back and forth)
export const useRoll = () => {
    const rotate = useSharedValue(0);

    useEffect(() => {
        rotate.value = withRepeat(
            withSequence(
                withTiming(168, { duration: 1500 }),
                withTiming(0, { duration: 1500 })
            ),
            -1,
            false
        );
    }, []);

    return useAnimatedStyle(() => ({
        transform: [{ rotate: `${rotate.value}deg` }],
        position: 'absolute',
    }));
};

// Move animation (equivalent to .move) - horizontal loop
export const useMove = () => {
    const translateX = useSharedValue(0);

    useEffect(() => {
        translateX.value = withRepeat(
            withSequence(
                withTiming(40, { duration: 1500 }),
                withTiming(0, { duration: 1500 })
            ),
            -1,
            true
        );
    }, []);

    return useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));
};
